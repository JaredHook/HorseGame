import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Color } from '../app/color';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(public db: AngularFirestore) { }

  getColors() {
    return this.db.collection('/colors').valueChanges();
  }

  getColorById(id: number): Observable<Color[]> {
    return this.db.collection('/colors', ref => ref.where('color_id', '==', id)).snapshotChanges().pipe(
      map(actions => {

        let map1 = actions.map(a => {
          const data = a.payload.doc.data() as Color;
          const id = a.payload.doc.id;
          return {id, ...data};
        });
        return map1;
      })
    );
  }

  getColorById(id: number): Observable<Color[]> {
    return this.db.collection('/colors', ref => ref.where('color_id', '==', id)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Color
          const id = a.payload.doc.id
          return { id, ...data };
        })
      })
    )
  }
}
