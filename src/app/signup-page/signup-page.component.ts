import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-signup-page',
    templateUrl: './signup-page.component.html',
    styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }
    onSubmit(value: string): void {
        console.log('you submitted value: ', value);
    }
}
    // validators for reactive form
//    form: FormGroup;

//    constructor(private formBuilder: FormBuilder) { }

//    ngOnInit() {
//        this.form = this.formBuilder.group({
//            name: [null, Validators.required],
//            password: [null, Validators.required],
//            dob: this.formBuilder.group({
//                year: [null, Validators.required],
//                month: [null, Validators.required],
//                day: [null, Validators.required],
//            email: [null, [Validators.required, Validators.email]],
//            referred: [null],
//            })
//        });
//    }
