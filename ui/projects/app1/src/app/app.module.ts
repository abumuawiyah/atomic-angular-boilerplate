import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AtomicComponentModule } from "projects/atomic-component/src/public-api";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AtomicComponentModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
