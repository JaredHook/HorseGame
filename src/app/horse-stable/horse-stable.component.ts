import { Component, OnInit } from '@angular/core';
import { HorseService } from '../../services/horse.service';
import { AuthService } from '../../services/auth.service';
import { Horse } from '../horse';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpParams, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-horse-stable',
  templateUrl: './horse-stable.component.html',
  styleUrls: ['./horse-stable.component.css']
})
export class HorseStableComponent implements OnInit {
  horseService: HorseService;
  horses: Horse[] = [];
  horse: Horse;

  constructor(horseService: HorseService,
    public authService: AuthService,
    private http: HttpClient,
    private router: Router) {
    this.horseService = horseService;
  }

  ngOnInit() {


    this.http
      .get<Horse[]>(
        'http://localhost/getHorses.php',

        {
          params: new HttpParams().set('id', localStorage.getItem('user'))
        }

      )
      .subscribe(
        (val) => {
          this.authService.SignIn(val["id"]);
          console.log("POST call successful value returned in body",
            val);
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });

    //this.horseService.getHorses().subscribe(
    //    res => {
    //    //console.log(res[0].payload.doc.id)
    //    //let br = res as Array<any>;
    //    for (let i = 0; i < res.length; i++) {
    //      //let horse = new Horse(res[i].payload.doc.id);
    //      this.horses.push(res[i]);
    //    }

        

        //this.horses = this.horsesCollection.snapshotChanges().map(actions => {
        //  return actions.map(a => {
        //    const data = a.payload.doc.data() as Horse;
        //    const id = a.payload.doc.id;
        //    return { id, ...data };
        //  });
        //});
      
  }
}
