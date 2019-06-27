import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Observable } from 'rxjs';
import {  FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    SignUpComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
      
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
