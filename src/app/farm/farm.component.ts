import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Horse } from '../horse';
import {HorseService} from '../../services/horse.service';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.css']
})
export class FarmComponent implements OnInit {
  horse: Horse;
  horseService: HorseService;

  constructor(private router: ActivatedRoute, horseService: HorseService) {
    this.horseService = horseService;
  }

  ngOnInit() {

    this.router.paramMap.pipe(map(() => window.history.state)).subscribe(res => {
      this.horse = res as Horse;
    });
    if (!this.horse.id) {
      this.horseService.getHorseById(this.router.snapshot.params.id).subscribe(
        res => {


        });
    }
  }

}

