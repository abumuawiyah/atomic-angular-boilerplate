import { action } from "@storybook/addon-actions";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";

import { CommonModule } from "@angular/common";
import { AtomicComponentModule } from "atomic-component";

storiesOf("Foundation", module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule, AtomicComponentModule],
      schemas: [],
      declarations: [],
      entryComponents: []
    })
  )
  .add("Color Palette", () => {
    return {
      template: `
        <ui-theme-provider>
          <ng-template let-palette="palette">
            <ui-box *ngIf="palette">
              <ui-box *ngFor="let k of keys(palette)" flex flexDirection="column" alignItems="center">
                <ui-box>
                </ui-box>
                <ui-box>{{k}}</ui-box>
                <ui-box >({{palette[k]}})</ui-box>
              </ui-box>
            </ui-box>
          </ng-template>
        </ui-theme-provider>
      `,
      props: {
        keys: colors => Object.keys(colors),
        container: `
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            grid-gap: 10px;
        `,
        paletteItem: color =>
          `
            width: 50px;
            height: 50px;
            background-color: ${color};
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            flex-direction: column;
          `,
        text: `
          font-size: calc(1rem - 3px);
        `
      }
    };
  });
