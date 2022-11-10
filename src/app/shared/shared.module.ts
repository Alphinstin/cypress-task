import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OpenTabDirective } from './directives/opentab.directive';
import {
  SideMenuDirective,
  SideMenuTriggerDirective,
} from './directives/side-menu.directive';

@NgModule({
  declarations: [SideMenuDirective, SideMenuTriggerDirective, OpenTabDirective],
  imports: [],
  exports: [SideMenuDirective, SideMenuTriggerDirective, OpenTabDirective],
  providers: [],
})
export class SharedModule {}
