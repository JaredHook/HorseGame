import { Color } from './color';
import { Breed } from './breed';

export class Horse {
  id: number;
  breed_id: number;
  color_id: number;
  energy: number;
  gallop: number;
  gender: string;
  health: number;
  jumping: number;
  dressage: number;
  morale: number;
  name: string;
  speed: number;
  stamina: number;
  dayTime: number;
  dob: any;
  userId: string;
  months: number;
  years: number;
  height: number;
  weight: number;
  tr_gallop: number;
  tr_jumping: number;
  tr_speed: number;
  tr_stamina: number;
  tr_trot: number;
  tr_dressage: number;
  trot: number;
  breed: string;
  breed_key:string
  color_key: string;
  color: string;
  isInBed: boolean;
  isFed: boolean;
  login: string;

constructor(
    breed: number,
    color: number,
    name: string,
    gender: string,
    stamina: number,
    speed: number,
    gallop: number,
    dressage: number,
    trot: number,
    jumping: number,
    height: number,
    weight: number,
    energy: number,
    health: number,
    morale: number,
    dayTime: number,
    tr_stamina: number,
    tr_speed: number,
    tr_gallop: number,
    tr_trot: number,
    tr_jumping: number,
    tr_dressage: number,
    isInBed: boolean,
    isFed: boolean,
  )
  {
    this.breed = breed;
    this.color = color;
    this.name = name;
    this.gender = gender;
    this.stamina = stamina;
    this.speed = speed;
    this.gallop = gallop;
    this.dressage = dressage;
    this.trot = trot;
    this.jumping = jumping;
    this.height = height;
    this.weight = weight;
    this.energy = energy;
    this.health = health;
    this.morale = morale;
    this.dayTime = dayTime;
    this.tr_stamina = tr_stamina;
    this.tr_speed = tr_speed;
    this.tr_gallop = tr_gallop;
    this.tr_trot = tr_trot;
    this.tr_jumping = tr_jumping;
    this.tr_dressage = tr_dressage;
    this.isInBed = isInBed;
    this.isFed = isFed;
  }
}
