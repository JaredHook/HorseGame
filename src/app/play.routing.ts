import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { FarmComponent } from './farm/farm.component';

export const routes: Routes = [
  {path: '', component: FarmComponent } //default route of the module
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes)