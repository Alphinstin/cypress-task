import { NgOptimizedImage, provideImageKitLoader } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app-routing.module';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { PagesModule } from './pages/page.module';
import { OpenTabDirective } from './shared/directives/opentab.directive';
import { SideMenuDirective } from './shared/directives/side-menu.directive';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    PagesModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [
    provideImageKitLoader(environment.CDN_URL, {
      ensurePreconnect: true,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
