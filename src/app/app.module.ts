import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ChooseAHorseComponent } from './choose-a-horse/choose-a-horse.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BreedPageComponent } from './breed-page/breed-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    ChooseAHorseComponent,
    LandingPageComponent,
    BreedPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
