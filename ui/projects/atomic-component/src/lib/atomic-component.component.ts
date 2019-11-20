import { Component, OnInit } from "@angular/core";

@Component({
  selector: "lib-atomic-component",
  templateUrl: "./atomic-component.component.html",
  styles: []
})
export class AtomicComponentComponent implements OnInit {
  public classes: Object;

  public onRedChanged: Function;
  public onGreenChanged: Function;
  public onBlueChanged: Function;

  public ngOnInit(): void {}

  private createChangeFunction(color: string): (event: Event) => void {
    return (event: Event) => {
      event.stopPropagation();
      event.preventDefault();
    };
  }
}
