import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HorseService {
  
  constructor(public db: AngularFirestore) { }

  getRandStat(): number {
    return Math.floor((Math.random() * 100) + 1);
  }

  createRandomHorse(value, userId) {
    let stamina = this.getRandStat();
    let speed = this.getRandStat();
    let gallop = this.getRandStat();
    let trot = this.getRandStat();
    let jumping = this.getRandStat();
    

    return this.db.collection('horses').add({
      breed: value.breed,
      color: value.color,
      name: 'Strawberry',
      gender: 'mare',
      userId: userId,
      stamina: stamina,
      speed: speed,
      gallop: gallop,
      trot: trot,
      jumping: jumping,
      energy: 100,
      health: 100,
      morale: 100,
      tr_stamina: 0,
      tr_speed: 0,
      tr_gallop: 0,
      tr_trot: 0,
      tr_jumping: 0
    });
  }

  getHorses() {
    return this.db.collection('/horses', ref => ref.where('userId', '==', AuthService.uid)).snapshotChanges()
    

  }
}
