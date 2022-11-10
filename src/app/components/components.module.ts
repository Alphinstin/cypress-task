import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [],
  imports: [HeaderComponent, FooterComponent, CommonModule],
  exports: [HeaderComponent, FooterComponent],
  providers: [],
})
export class ComponentModule {}
