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

  constructor(private router: ActivatedRoute, horseService: HorseService, colorService: ColorService, breedService: BreedService) {
    this.horseService = horseService;
    this.colorService = colorService;
    this.breedService = breedService;
  }

  ngOnInit() {
    this.router.paramMap.pipe(map(() => window.history.state)).subscribe(res => {//when you enter the page at first
      this.horse = res as Horse;
      //this.getColorBreedById(this.horse.breed, this.horse.color)
    });
    if (!this.horse.id) {// when you reload the page
      this.horseService.getHorseById(this.router.snapshot.params.id).subscribe(
        res => {
          this.horse = res;
          //this.getColorBreedById(this.horse.breed, this.horse.color);
        });
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

  onBeachClick() {
    this.horse.tr_stamina++ 
    this.horseService.trainHorse(this.router.snapshot.params.id, this.horse.tr_stamina)
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
