import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorseStableComponent } from './horse-stable/horse-stable.component';
import { routing } from './stable.routing';


@NgModule({
  declarations: [HorseStableComponent],
  imports: [
    CommonModule,
    routing,
  ],
  exports: [HorseStableComponent]
})
export class StableModule { }
