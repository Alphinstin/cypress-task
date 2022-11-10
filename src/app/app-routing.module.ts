import { Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { HomeComponent } from './pages/home/home.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
    ],
  },
];
