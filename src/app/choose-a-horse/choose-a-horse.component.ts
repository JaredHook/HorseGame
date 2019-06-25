import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { IBreed } from './ibreed.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Breed } from './breed';
import { Color } from './color';
import { IColor } from './icolor.interface';


@Component({
    selector: 'app-choose-a-horse',
    templateUrl: './choose-a-horse.component.html',
    styleUrls: ['./choose-a-horse.component.css']
})
export class ChooseAHorseComponent implements OnInit {
    breeds: Breed[] = [];
    allBreeds: Breed[];

    // colors 
    colors: Color[] = [];
    allColors: Color[];

    constructor(private http: HttpClient) { }

    ngOnInit() {
        // makeHeaders();
        console.log('success');
        this.allBreeds = this.getBreeds();
        this.allColors = this.getColors();
    }

    getBreeds(): Breed[] {
        this.http
            .get<{ [key: string]: any }>('http://avellinfalls.com/home/new_account_display_breeds')
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

    getColors(): Color[] {
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
}
