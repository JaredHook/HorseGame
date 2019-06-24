import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { IBreed } from './ibreed.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Breed } from './breed';


@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
    data = Object;
    breeds: Breed[] = [];
    breed$: Observable<IBreed[]>;
    results: IBreed[] = [];
    

    constructor(private http: HttpClient) { }

    ngOnInit() {
       // makeHeaders();
        this.getBreeds();
        console.log(this.getBreeds())
    }

    getBreeds(): any {

     

      /*  this.breed$ = this.http
            .get<IBreed[]>('http://avellinfalls.com/home/new_account_display_breeds')
            .map(data => _.values(data))
            .do(console.log);
            */
   


        // This is also for test purposes partially works.
        return this.http
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
                    console.log(this.breeds[i].breed)
                }

                console.log();

                
            })  

    }

    /* This is for testing purposes. Prints array to console.log It works.

    getBreeds() {

      //  const headers: HttpHeaders = new HttpHeaders({



        this.http
            .get('http://avellinfalls.com/home/new_account_display_breeds')
         .subscribe(data => {
               // this.data = data;
                console.log(data);
            })
    }

*/
   

}











//.get('https://ng-complete-guide-16b0f.firebaseio.com/posts.json') // personal  html link for testing.
// http://avellinfalls.com/home/new_account_display_breeds  
//http://avellinfalls.com/home/new_account_display_colors