import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { IBreed } from './ibreed.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Breed } from './breed';
import { Color } from './color';
import {  FormsModule, NgForm } from '@angular/forms';


@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  //  data = Object;
    breeds: Breed[] = [];
    colors: Color[] = [];
  //  breed$: Observable<IBreed[]>;
  //  results: IBreed[] = [];
    all: Breed[];
    entire: Color[];

    constructor(private http: HttpClient) { }

    ngOnInit() {
       // makeHeaders();
        this.all = this.getBreeds();
        this.entire = this.getColor();
    }

    


    getBreeds(): Breed[]{
        this.http
            .get< { [key: string]: any }>('http://avellinfalls.com/home/new_account_display_breeds')
            .pipe(
                map(responseData => {
                    let dataBreed: any;
                for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                        dataBreed = responseData[key]
                    }

                }

                    return dataBreed;
              
            }))
            .subscribe(data => {
                let br = data as Array<Breed>;
                for (let i = 0; i < br.length; i++) {
                    let breed = new Breed(br[i].id, br[i].breed, br[i].breed_id);
                    this.breeds.push(breed);
                }
            })
        return this.breeds;
    }


  getColor(): Color[] {
      this.http
          .get<{ [key: string]: any }>('http://avellinfalls.com/home/new_account_display_colors')
          .pipe(
              map(responseData => {
                  let dataColor: any;
                  for (const key in responseData) {
                      if (responseData.hasOwnProperty(key)) {
                          dataColor = responseData[key]
                      }

                  }

                  return dataColor;

              }))
          .subscribe(data => {
              let br = data as Array<Color>;
              for (let i = 0; i < br.length; i++) {
                  let color = new Color(br[i].id, br[i].color, br[i].color_id);
                  this.colors.push(color);
              }
          })
      return this.colors;
    } 

    onSubmit(input: NgForm) {
        console.log(input.value["password"]);
        this.http.post("http://avellinfalls.com/home/add_new_user",
            {
                "login": input.value["login"],
                "password": input.value["password"],
                "day": input.value["day"],
                "month": input.value["month"],
                "year": input.value["year"],
                "email": input.value["email"],
                "checkbox": input.value["checkbox"]

            })
            .subscribe(
                (val) => {
                    console.log("POST call successful value returned in body",
                        val);
                },
                response => {
                    console.log("POST call in error", response);
                },
                () => {
                    console.log("The POST observable is now completed.");
                });
    } 

   /* This is another way to display the value.
     onSubmit(value:any):void {
        console.log(value.value);
        this.http.post("http://avellinfalls.com/home/add_new_user",
            {
                "login": "value.value"
            })
            .subscribe(
                (val) => {
                    console.log("POST call successful value returned in body",
                        val);
                },
                response => {
                    console.log("POST call in error", response);
                },
                () => {
                    console.log("The POST observable is now completed.");
                });
    } */
}











//.get('https://ng-complete-guide-16b0f.firebaseio.com/posts.json') // personal  html link for testing.
// http://avellinfalls.com/home/new_account_display_breeds  
//http://avellinfalls.com/home/new_account_display_colors