import {
  Component,
  OnInit,
  Input,
  HostBinding,
  AfterContentInit,
  ContentChild,
  TemplateRef
  // forwardRef
} from "@angular/core";
// import { NG_VALUE_ACCESSOR } from "@angular/forms";
import palette from "../colors";
import scales from "../spacing";

// export const THEME_PROVIDER_VALUE_ACCESSOR: any = {
//   provide: NG_VALUE_ACCESSOR,
//   useExisting: forwardRef(() => ThemeProviderComponent),
//   multi: true
// };

@Component({
  selector: "ui-theme-provider",
  template: `
    <ng-container *ngIf="childAsTemplate">
      <ng-container *ngTemplateOutlet="template; context: theme"></ng-container>
    </ng-container>
    <ng-content *ngIf="!childAsTemplate"></ng-content>
  `
  // providers: [THEME_PROVIDER_VALUE_ACCESSOR]
})
export class ThemeProviderComponent implements OnInit, AfterContentInit {
  @Input() css: object;
  @HostBinding("class") className: string;
  @ContentChild(TemplateRef, { static: false }) template!: TemplateRef<any>;
  theme = {
    palette,
    scales
  };
  childAsTemplate: boolean = false;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {
    this.childAsTemplate = this.template && true;
    console.log(this);
  }
}
