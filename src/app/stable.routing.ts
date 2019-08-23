import { HorseStableComponent } from './horse-stable/horse-stable.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {path: '', component: HorseStableComponent } //default route of the module
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes)