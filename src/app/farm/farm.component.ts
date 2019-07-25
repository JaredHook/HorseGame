import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Horse } from '../horse';
import { HorseService } from '../../services/horse.service';
import { BreedService } from '../../services/breed.service';
import { Breed } from '../breed';
import { ColorService } from '../../services/color.service';
import { Color } from '../color';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.css']
})
export class FarmComponent implements OnInit {
  horse: Horse;
  horseService: HorseService;
  breed: Breed;
  color: Color;

  constructor(private router: ActivatedRoute, horseService: HorseService, private breedService: BreedService, private colorService: ColorService) {
    this.horseService = horseService;
  }

  ngOnInit() {
    this.router.paramMap.pipe(map(() => window.history.state)).subscribe(res => {
      this.horse = res as Horse;
    });
    if (!this.horse.id) {
      this.horseService.getHorseById(this.router.snapshot.params.id).subscribe(
        res => {
          this.horse = res;
        });
    }
  }

  ngOnChanges() {
    this.getBreed();
    this.getColor();
  }

  getBreed(): Breed {
    this.breedService.getBreeds()
      .subscribe( res => {
        const br = res as Array<Breed>;

        for (let i = 0; i < br.length; i++) {
          if (br[i].breed_id == this.horse.breed) {
            this.breed = br[i];
          }
        }
      });
    return this.breed;
  }

  getColor(): Color {
    this.colorService.getColors()
      .subscribe(res => {
        const cl = res as Array<Color>;

        for (let i = 0; i < cl.length; i++) {
          if (cl[i].color_id == this.horse.color) {
            this.color = cl[i];
          }
        }
      });
    return this.color;
  }
}
