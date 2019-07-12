import { Component, OnInit } from '@angular/core';
import { HorseService } from '../../services/horse.service';
import { Horse } from '../horse';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-horse-stable',
  templateUrl: './horse-stable.component.html',
  styleUrls: ['./horse-stable.component.css']
})
export class HorseStableComponent implements OnInit {
  horseService: HorseService;
  horses: Horse[] = [];

  constructor(horseService: HorseService,
    private router: Router) {
    this.horseService = horseService;
  }

  ngOnInit() {
    this.horseService.getHorses().subscribe(
        res => {
        //console.log(res[0].payload.doc.id)
        //let br = res as Array<any>;
        for (let i = 0; i < res.length; i++) {
          //let horse = new Horse(res[i].payload.doc.id);
          this.horses.push(res[i]);
        }

        //this.horses = this.horsesCollection.snapshotChanges().map(actions => {
        //  return actions.map(a => {
        //    const data = a.payload.doc.data() as Horse;
        //    const id = a.payload.doc.id;
        //    return { id, ...data };
        //  });
        //});
      });
  }
}
