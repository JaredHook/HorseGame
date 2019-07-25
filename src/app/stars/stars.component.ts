import { Component, OnInit, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input() public stamina?: number;
  @Input() public speed?: number;
  @Input() public dressage?: number;
  @Input() public gallop?: number;
  @Input() public trot?: number;
  @Input() public jumping?: number;

  totalSkills: number;

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-lifecycle-interface

  ngOnChanges() {

    try {
      // tslint:disable-next-line:max-line-length
      this.totalSkills = (Number(this.stamina) || 0) + (Number(this.speed) || 0) + (Number(this.gallop) || 0) + (Number(this.trot) || 0) + (Number(this.jumping) || 0) + (Number(this.dressage) || 0);

      try {
      // code that may throw an error...
    } catch (e) {
      if (e instanceof Error) {
        // properly handle Error e
      } else {
        // probably cannot recover...therefore, rethrow
        throw e;
      }
    }

      if (isNaN(this.totalSkills)) { throw new Error('this is not a number'); }
      if (this.totalSkills === 0) { throw new Error('total skills are not valid'); }
    } catch (e) {
      console.log(e);

    }
  }
}






