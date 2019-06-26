import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-signup-page',
    templateUrl: './signup-page.component.html',
    styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

    constructor(private http: HttpClient) { }

    ngOnInit() {
    }
    onSubmit(value: any): void {
        console.log('you submitted value: ', value.value["login"]);
        this.http.post(
            "http://avellinfalls.com/home/add_new_user",
            "login", value.value["login"]
        )
            .subscribe(
                (val) => {
                    console.log("post call successful value",
                        val);
                },
                response => {
                    console.log("post call in error", response);
                },
                () => {
                    console.log("post observable is now completed");
                });
    }
}