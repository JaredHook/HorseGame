import { Component, OnInit, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input() public stamina: number;
  @Input() public speed: number;
  @Input() public dressage: number;
  @Input() public gallop: number;
  @Input() public trot: number;
  @Input() public jumping: number;

  totalSkills = 0;

  constructor() { }
  

  ngOnInit() {
  }


  ngOnChanges() {
    this.totalSkills = this.stamina + this.speed + this.gallop + this.trot + this.jumping
    console.log(this.totalSkills)
  }

  
}
