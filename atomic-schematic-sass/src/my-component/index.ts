import {
  apply,
  FileEntry,
  forEach,
  MergeStrategy,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  template,
  Tree,
  url,
  chain,
  SchematicsException,
  branchAndMerge
} from "@angular-devkit/schematics";
import * as ts from "typescript";
import { join, normalize } from "path";
import { getWorkspace } from "@schematics/angular/utility/config";
import { strings } from "@angular-devkit/core";
import { dasherize } from "@angular-devkit/core/src/utils/strings";
import {
  addDeclarationToModule,
  addExportToModule
} from "@schematics/angular/utility/ast-utils";
import { InsertChange } from "@schematics/angular/utility/change";
import { buildRelativePath } from "@schematics/angular/utility/find-module";

function addDeclarationToNgModule(options: any): Rule {
  return (host: Tree) => {
    if (options.skipImport || !options.module) {
      return host;
    }

    const modulePath = options.module;
    const text = host.read(modulePath);
    if (text === null) {
      throw new SchematicsException(`File ${modulePath} does not exist.`);
    }
    const sourceText = text.toString("utf-8");
    const source = ts.createSourceFile(
      modulePath,
      sourceText,
      ts.ScriptTarget.Latest,
      true
    );

    const componentPath =
      `/${options.path}/components/` +
      (options.flat ? "" : strings.dasherize(options.name) + "/") +
      strings.dasherize(options.name) +
      ".component";
    const relativePath = buildRelativePath(modulePath, componentPath).substr(1);
    const classifiedName = strings.classify(`${options.name}Component`);
    const declarationChanges = addDeclarationToModule(
      source,
      modulePath,
      classifiedName,
      relativePath
    );
    const exportChanges = addExportToModule(
      source,
      modulePath,
      classifiedName,
      relativePath
    );
    const declarationRecorder = host.beginUpdate(modulePath);

    /**
     * both addDeclarationToModule and addExportToModule will add import.
     * to remove duplicate, i remove the toAdd of exportChanges
     */
    for (const change of [...declarationChanges, exportChanges[0]]) {
      if (change instanceof InsertChange) {
        declarationRecorder.insertLeft(change.pos, change.toAdd);
      }
    }

    host.commitUpdate(declarationRecorder);
    return host;
  };
}

export function setupOptions(host: Tree, options: any): Tree {
  const workspace = getWorkspace(host);

  if (!options.project) {
    options.project = Object.keys(workspace.projects)[0];
  }
  const project = workspace.projects[options.project];
  options.path = join(normalize(project.root), "src");
  return host;
}

export function myComponent(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    setupOptions(tree, _options);

    _options.module = `/${_options.path}/lib/atomic-component.module.ts`;

    const moveComponentPath = _options.flat
      ? normalize(_options.path)
      : normalize(
          _options.path + "/lib/components/" + dasherize(_options.name)
        );

    const templateSource = apply(url("./files/src/component"), [
      template({
        ...strings,
        ..._options
      }),
      move(moveComponentPath),
      // fix for https://github.com/angular/angular-cli/issues/11337
      forEach((fileEntry: FileEntry) => {
        if (tree.exists(fileEntry.path)) {
          tree.overwrite(fileEntry.path, fileEntry.content);
        }
        return fileEntry;
      })
    ]);

    const moveStoryPath = _options.flat
      ? normalize(_options.path)
      : normalize(
          _options.componentType === "Organisms"
            ? "src/stories/organisms/"
            : `src/stories/${dasherize(_options.name)}`
        );

    const templateSource2 = apply(url("./files/src/story"), [
      template({
        ...strings,
        ..._options
      }),
      move(moveStoryPath),
      // fix for https://github.com/angular/angular-cli/issues/11337
      forEach((fileEntry: FileEntry) => {
        if (tree.exists(fileEntry.path)) {
          tree.overwrite(fileEntry.path, fileEntry.content);
        }
        return fileEntry;
      })
    ]);

    if (_options.componentType === "Organisms") {
      return chain([mergeWith(templateSource2, MergeStrategy.Overwrite)]);
    }

    return chain([
      branchAndMerge(
        chain([
          addDeclarationToNgModule(_options),
          mergeWith(templateSource, MergeStrategy.Overwrite),
          mergeWith(templateSource2, MergeStrategy.Overwrite)
        ])
      )
    ])(tree, _context);
  };
}
