import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Breed } from '../app/breed';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BreedService {

  constructor(public db: AngularFirestore) { }

  getBreeds() {
    return this.db.collection('/breeds').valueChanges()
  }

  getBreedById(id: number): Observable<Breed[]> {
    return this.db.collection('/breeds', ref => ref.where('breed_id', '==', id)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Breed
          const id = a.payload.doc.id
          return { id, ...data };
        })
      })
    )
  }
}
