import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { FarmComponent } from './farm/farm.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetailBoxComponent } from './detail-box/detail-box.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HorseStableComponent } from './horse-stable/horse-stable.component';
import { StarsComponent } from './stars/stars.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { AuthService } from "../services/auth.service";

const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: SignupPageComponent },
  { path: 'play', component: FarmComponent },
  { path: 'play/:id', component: FarmComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'stable', component: HorseStableComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    FarmComponent,
    DetailBoxComponent,
    NavbarComponent,
    LoginComponent,
    LoginFormComponent,
    HorseStableComponent,
    StarsComponent,
    ProgressbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [LoginFormComponent
  ],
})
export class AppModule { }
