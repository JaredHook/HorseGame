import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: SignupPageComponent },
  { path: 'play', loadChildren: './play.module#PlayModule' },
  { path: 'play/:id', loadChildren: './play.module#PlayModule' },
  { path: 'login', component: LoginFormComponent },
  { path: 'stable', loadChildren: './stable.module#StableModule' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes)