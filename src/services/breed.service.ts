import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BreedService {

  constructor(public db: AngularFirestore) { }

  getBreeds() {
    return this.db.collection('/breeds').valueChanges()
  }
}
