import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
