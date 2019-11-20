import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BoxComponent } from "./components/box/box.component";
import { ThemeProviderComponent } from "./theme/theme-provider/theme-provider.component";
import { RoleProviderComponent } from "./role/role-provider/role-provider.component";
import { ChevronDownIconComponent } from "./svg/chevron-down-icon/chevron-down-icon.component";
import { ChevronUpIconComponent } from "./svg/chevron-up-icon/chevron-up-icon.component";
import { SettingIconComponent } from "./svg/setting-icon/setting-icon.component";
import { TypographyComponent } from "./components/typography/typography.component";
import { BuildIconComponent } from "./svg/build/build-icon.component";
import { DoneIconComponent } from "./svg/done/done-icon.component";
import { FlexDirective } from "./components/box/flex.directive";
import { Test1Component } from './components/test1/test1.component';
import { Test2Component } from './components/test2/test2.component';

@NgModule({
  declarations: [
    BoxComponent,
    ThemeProviderComponent,
    RoleProviderComponent,
    ChevronDownIconComponent,
    ChevronUpIconComponent,
    BuildIconComponent,
    DoneIconComponent,
    SettingIconComponent,
    TypographyComponent,
    FlexDirective,
    Test1Component,
    Test2Component
  ],
  imports: [CommonModule],
  exports: [
    BoxComponent,
    ThemeProviderComponent,
    RoleProviderComponent,
    ChevronDownIconComponent,
    ChevronUpIconComponent,
    BuildIconComponent,
    DoneIconComponent,
    SettingIconComponent,
    TypographyComponent,
    FlexDirective,
    Test1Component,
    Test2Component
  ]
})
export class AtomicComponentModule {}
