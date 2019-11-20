import { Component, ElementRef, AfterContentInit } from "@angular/core";
import { BoxComponent } from "../box/box.component";

@Component({
  selector: "ui-typography",
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ["./typography.component.scss"]
})
export class TypographyComponent extends BoxComponent
  implements AfterContentInit {
  constructor(el: ElementRef) {
    super(el);
  }

  ngAfterContentInit(): void {}
}
