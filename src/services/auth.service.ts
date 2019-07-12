import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  static uid: string;

  constructor(uid: string) {
    sessionStorage.setItem('uid', uid);

  }
}
