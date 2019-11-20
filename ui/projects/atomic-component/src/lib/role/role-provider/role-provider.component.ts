import {
  Component,
  OnInit,
  Input,
  HostBinding,
  AfterContentInit
} from "@angular/core";

@Component({
  selector: "RoleProvider",
  template: `
    <ng-content *ngIf="roles.includes(role)"></ng-content>
  `
})
export class RoleProviderComponent implements OnInit, AfterContentInit {
  @Input() roles: Array<string>;
  @Input() role: string;
  @HostBinding("class") className;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {}
}
