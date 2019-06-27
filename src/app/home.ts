import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
<app-choose-a-horse></app-choose-a-horse>
<app-signup-page></app-signup-page>
`
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
