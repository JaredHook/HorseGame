import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Horse } from '../horse';
import { HorseService } from '../../services/horse.service';
import { ColorService } from '../../services/color.service';
import { BreedService } from '../../services/breed.service';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.css']
})
export class FarmComponent implements OnInit {
  horse: Horse;
  horseService: HorseService;
  colorService: ColorService;
  breedService: BreedService;

  constructor(private router: ActivatedRoute, horseService: HorseService, colorService: ColorService, breedService: BreedService, public authService: AuthService) {
    this.horseService = horseService;
    this.colorService = colorService;
    this.breedService = breedService;
  }

  ngOnInit() {
    this.router.paramMap.pipe(map(() => window.history.state)).subscribe((res: Horse) => {//when you enter the page at first
      this.loginCheck(res);
      //this.getColorBreedById(this.horse.breed, this.horse.color)
    });
    if (!this.horse.id) {// when you reload the page
      this.horseService.getHorseById(this.router.snapshot.params.id).subscribe(
        res => {
          this.loginCheck(res);
          //this.getColorBreedById(this.horse.breed, this.horse.color);
        });
    }
  }

  loginCheck(horse: Horse) {
    this.horse = horse;
    if (this.horse.userId) {
      if (!this.authService.isLoggedIn || (localStorage.getItem('user')) !== this.horse.userId) {
        console.log("You shouldn't be here.");
      }
    }
  }

  //getColorBreedById(breedId: number, colorId: number) {
  //  this.colorService.getColorById(colorId).subscribe(res => {
  //    this.horse.c = res[0];
  //  })
  //  this.breedService.getBreedById(breedId).subscribe(res => {
  //    this.horse.b = res[0];
  //  })
  //}

  //Ternary operators initialize training values if they were previously undefined as many of our horses were made before we added the functionality

  onBeachClick() {
    this.horse.tr_dressage = (this.horse.tr_dressage ? this.horse.tr_dressage += 0.5 : 0.5);
    this.horse.tr_gallop = (this.horse.tr_gallop ? this.horse.tr_gallop += 1 : 1);
    this.horse.tr_speed = (this.horse.tr_speed ? this.horse.tr_speed += 1 : 1);
    this.horseService.trainHorse(this.router.snapshot.params.id, this.horse);
  }

  onForestClick() {
    this.horse.tr_stamina = (this.horse.tr_stamina ? this.horse.tr_stamina += 0.5 : 0.5);
    this.horse.tr_trot = (this.horse.tr_trot ? this.horse.tr_trot += 1 : 1);
    this.horse.tr_speed = (this.horse.tr_speed ? this.horse.tr_speed += 1 : 1);
    this.horseService.trainHorse(this.router.snapshot.params.id, this.horse);
  }

  onMountainClick() {
    this.horse.tr_jumping = (this.horse.tr_jumping ? this.horse.tr_jumping += 0.5 : 0.5);
    this.horse.tr_stamina = (this.horse.tr_stamina ? this.horse.tr_stamina += 1 : 1);
    this.horse.tr_trot = (this.horse.tr_trot ? this.horse.tr_trot += 0.5 : 0.5);
    this.horseService.trainHorse(this.router.snapshot.params.id, this.horse);
  }

  feed() {
    if (this.horse.dayTime > 8) {
      this.horse.dayTime -= 1;
      this.horse.isFed = true;
      //check horse health and either add 20 or if that would put it above 100 set it to 100
      this.horse.health = (this.horse.health <= 80) ? this.horse.health += 20 : 100;
      //check horse morale and either add 5 to it or if that would put it above 100 set it to 100
      this.horse.morale = (this.horse.morale <= 95) ? this.horse.morale += 5 : 100;
      //check horse energy and either add 5 to it or if that would put it above 100 set it to 100
      this.horse.energy = (this.horse.energy <= 95) ? this.horse.energy += 5 : 100;

      this.horseService.feedHorse(this.router.snapshot.params.id,
        this.horse.energy,
        this.horse.health,
        this.horse.morale,
        this.horse.dayTime,
        this.horse.isFed);
    }
  }

  bed() {
    this.horse.isInBed = true;
  }
}
