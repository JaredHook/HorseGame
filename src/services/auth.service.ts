import { Injectable,  } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  static uid: string;
  

  constructor(public router: Router) {
    //sessionStorage.setItem('uid', uid);
  }

  SignIn(uid: string) {
    localStorage.removeItem('user');
    /* Saving user data in localstorage when logged in and
     * setting up null when logged out */
    if (uid) {
      localStorage.setItem('user', uid);
      localStorage.getItem('user');
    } else {
      localStorage.setItem('user', null);
      localStorage.getItem('user');
    }
    //sessionStorage.setItem('uid', uid);
  }

  // Returns true when user is logged in
  get isLoggedIn(): boolean {
    const user = localStorage.getItem('user');
    return (user !== null) ? true : false;
  }

  // Sign out 
  SignOut() {
      localStorage.removeItem('user');
      this.router.navigate(['home']);
  }
}
