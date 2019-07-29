import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Horse } from '../horse';
import { BreedService } from '../../services/breed.service';
import { Breed } from '../breed';
import { ColorService } from '../../services/color.service';
import { Color } from '../color';

@Component({
  selector: 'app-detail-box',
  templateUrl: './detail-box.component.html',
  styleUrls: ['./detail-box.component.css']
})
export class DetailBoxComponent implements OnInit {
  viewMode = 'char';
  @Input() horse?: Horse;
  breed: Breed;
  color: Color;
  constructor(private breedService: BreedService, private colorService: ColorService) {
    
  }

  ngOnInit() {
    
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
