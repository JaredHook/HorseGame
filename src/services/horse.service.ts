import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Horse } from '../app/horse';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';
import { ColorService } from './color.service';
import { BreedService } from './breed.service';

@Injectable({
  providedIn: 'root'
})
export class HorseService {
  name: string = 'greg';

  constructor(public db: AngularFirestore,
              private colorService: ColorService,
              private breedService: BreedService) {
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
    let today = new Date();
  
   return from(this.db.collection('horses').add({
      breed: value.breed,
      color: value.color,
      name: 'Watermelon II',
      gender: gender,
      userId: userId,
      stamina: stamina,
      speed: speed,
      gallop: gallop,
      dressage: dressage,
      trot: trot,
      jumping: jumping,
      dob: today,
      height: 14.5,
      weight: 400,
      energy: 100,
      health: 50,
      morale: 10,
      dayTime: 24,
      tr_stamina: 0,
      tr_speed: 0,
      tr_gallop: 0,
      tr_trot: 0,
      tr_jumping: 0,
      tr_dressage: 0,
      isInBed: false,
      isFed: false
    }))
  }

  getHorses(): Observable<Horse[]> {
    return this.db.collection('/horses', ref => ref.where('userId', '==', localStorage.getItem('user'))).snapshotChanges().pipe(//return collection of horses from database
      map(actions => {//this sets the following code to execute on each server response
        return actions.map(a => {//returns an array of data
          const data = a.payload.doc.data() as Horse;//the horse data from server
          const id = a.payload.doc.id;// the id from server
          return { id, ...data };//array contents
        })
      })
    )
  }
//  this.getColorBreedById(data);
//this.calculateAge(data);

  getHorseById(id: string): Observable<Horse> {
    return this.db.collection('/horses').doc(id).snapshotChanges().pipe(
      map(res => {
        const horse = res.payload.data() as Horse;
        this.calculateAge(horse);
        this.getColorBreedById(horse);
        return horse;
      })
    )
  }

  calculateAge(horse: Horse) {
    if (horse.dob) {
      let today = Date.now(); // get today's date
      let age = today - (horse.dob.seconds * 1000); //compare today's date with the birthday of the horse * 1000 to convert the server call into milliseconds
      age = Math.floor((age / (24 * 3600)) / 1000) * 2; // convert milliseconds into days value, multiply by 2 as each day is 2 months in game logic
      if (age >= 12) { //if age is more than a year set years and months accordingly
        horse.years = Math.floor(age / 12);
        horse.months = (age % 12);
      } else { // otherwise age is less than a year and we can set months straight into age
        horse.months = age;
      }
    } else {
      let newDoB = new Date();
      horse.dob = newDoB;
    }
  }

  getColorBreedById(horse: Horse) {
    this.colorService.getColorById(horse.color).subscribe(res => {
      horse.c = res[0];
    })
    this.breedService.getBreedById(horse.breed).subscribe(res => {
      horse.b = res[0];
    })
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  trainHorse(id: string, horse:Horse) {
    return this.db.collection('/horses').doc(id).update({
      'tr_stamina': horse.tr_stamina,
      'tr_trot': horse.tr_trot,
      'tr_speed': horse.tr_speed,
      'tr_dressage': horse.tr_dressage,
      'tr_gallop': horse.tr_gallop,
      'tr_jumping': horse.tr_jumping
    })
  };

  feedHorse(id: string, energy: number, health: number, morale: number, dayTime: number, isFed: boolean) {
    return this.db.collection('/horses').doc(id).update({
      'energy': energy,
      'health': health,
      'morale': morale,
      'dayTime': dayTime,
      'isFed' : isFed
    })
  };
}
