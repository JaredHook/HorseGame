import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmComponent } from './farm/farm.component';
import { DetailBoxComponent } from './detail-box/detail-box.component';
import { StarsComponent } from './stars/stars.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { routing } from './play.routing';

@NgModule({
  declarations: [
    FarmComponent,
    DetailBoxComponent,
    NavbarComponent,
    StarsComponent,
    ProgressbarComponent
  ],
  imports: [
    CommonModule,
    routing,
  ],
  exports: [
    FarmComponent,
    DetailBoxComponent,
    NavbarComponent,
    StarsComponent,
    ProgressbarComponent
  ],
})
export class PlayModule { }
