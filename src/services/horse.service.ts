import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Horse } from '../app/horse';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HorseService {
  name: string = 'greg';

  constructor(public db: AngularFirestore) {
  }

  getRandStat(): number {
    return Math.floor((Math.random() * 100) + 1);
  }

  getRandGender(): string {
    if (Math.random() < 0.5) {
      return 'Stallion';
    } else {
      return 'Mare';
    }
  }

  createRandomHorse(value, userId): Observable<DocumentReference> {
    let stamina = this.getRandStat();
    let speed = this.getRandStat();
    let gallop = this.getRandStat();
    let trot = this.getRandStat();
    let jumping = this.getRandStat();
    let dressage = this.getRandStat();    
    let gender = this.getRandGender();
  
   return from(this.db.collection('horses').add({
      breed: value.breed,
      color: value.color,
      name: 'Strawberry',
      gender: gender,
      userId: userId,
      stamina: stamina,
      speed: speed,
      gallop: gallop,
      trot: trot,
      jumping: jumping,
      height: 14.5,
      weight: 400,
      energy: 100,
      health: 100,
      morale: 100,
      tr_stamina: 0,
      tr_speed: 0,
      tr_gallop: 0,
      tr_trot: 0,
      tr_jumping: 0
    }))
  }

  getHorses(): Observable<Horse[]> {
    return this.db.collection('/horses', ref => ref.where('userId', '==', sessionStorage.getItem('uid'))).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Horse
          const id = a.payload.doc.id
          return { id, ...data };
        })
      })
    )
  }

  getHorseById(id: string): Observable<Horse> {
    return this.db.collection('/horses').doc(id).snapshotChanges().pipe(
      map(res => {
        const data = res.payload.data() as Horse
        return  data ;

      })
    )
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  trainHorse(id: string, stamina:number) {
    return this.db.collection('/horses').doc(id).update({
      'tr_stamina': stamina })
  };
}
