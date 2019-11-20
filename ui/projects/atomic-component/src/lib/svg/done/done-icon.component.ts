import {
  Component,
  OnInit,
  HostBinding,
  Input,
  AfterContentInit
} from "@angular/core";

@Component({
  selector: "a-done-icon",
  template: `
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
    </svg>
  `
})
export class DoneIconComponent implements OnInit, AfterContentInit {
  @HostBinding("class") className;
  @Input() customStyle: string;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {}
}
