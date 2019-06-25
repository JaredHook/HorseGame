import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ChooseAHorseComponent } from './choose-a-horse/choose-a-horse.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BreedPageComponent } from './breed-page/breed-page.component';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home';
import { PlayComponent } from './play';

// line 19 redirects to home 
const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'play', component: PlayComponent },
  

];

@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    ChooseAHorseComponent,
    LandingPageComponent,
    BreedPageComponent,
    HomeComponent,
    PlayComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
