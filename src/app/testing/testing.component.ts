import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import * as _ from 'lodash';


interface Course {
    description: string;
    courseListIcon: string;
    iconUrl: string;
    longDescription: string;
    url: string;
}

interface Color {
    results: string;
}


@Component({
  selector: 'app-testing',
 templateUrl: './testing.component.html',
 styleUrls: ['./testing.component.css']
  
  
})


export class TestingComponent implements OnInit {



    constructor(public http: HttpClient) { }

    ngOnInit() {
        

  }





}
