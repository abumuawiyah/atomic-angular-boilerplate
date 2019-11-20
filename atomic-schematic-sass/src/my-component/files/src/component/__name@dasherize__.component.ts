import {
  Component,
  OnInit,
  Input,
  HostBinding,
  SimpleChanges
} from "@angular/core";

@Component({
  <% if (componentType === 'Atoms') { %>selector: "a-<%= name %>",<% } %>
  <% if (componentType === 'Molecules') { %>selector: "m-<%= name %>",<% } %>
  <% if (componentType === 'Organisms') { %>selector: "o-<%= name %>",<% } %>
  <% if (componentType === 'Util') { %>selector: "ui-<%= name %>",<% } %>
  template: `
    <ng-content></ng-content>
  `
})
export class <%= classify(name) %>Component implements OnInit {
  @HostBinding("class") className;

  constructor() {}


  ngOnInit() {

  }

}
