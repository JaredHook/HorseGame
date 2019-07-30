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
      this.getColorBreedById(this.horse.breed, this.horse.color)
    });
    if (!this.horse.id) {// when you reload the page
      this.horseService.getHorseById(this.router.snapshot.params.id).subscribe(
        res => {
          this.horse = res;
          this.getColorBreedById(this.horse.breed, this.horse.color);
        });
    }
  }

  getColorBreedById(breedId: number, colorId: number) {
    this.colorService.getColorById(colorId).subscribe(res => {
      this.horse.c = res[0];
    })
    this.breedService.getBreedById(breedId).subscribe(res => {
      this.horse.b = res[0];
    })
  }

  onBeachClick() {
    this.horse.tr_stamina++ 
    this.horseService.trainHorse(this.router.snapshot.params.id, this.horse.tr_stamina)
  }

  feed() {
    this.horse.health += 20;
    this.horse.morale += 5;
    this.horseService.careForHorse(this.router.snapshot.params.id,
                                   this.horse.energy,
                                   this.horse.health,
                                   this.horse.morale,
                                   this.horse.dayTime);
  }

}
