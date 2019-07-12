import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(public db: AngularFirestore) { }

  getColors() {
    return this.db.collection('/colors').valueChanges()
  }
}
