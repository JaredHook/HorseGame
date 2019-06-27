import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-play',
    template: `
<app-landing-page></app-landing-page>
<app-breed-page></app-breed-page>
`
})
export class PlayComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
