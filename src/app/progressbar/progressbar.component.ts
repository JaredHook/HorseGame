import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {
  @Input() public energy: number;
  @Input() public health: number;
  @Input() public morale: number;
  @Input() public time: number;
  @Input() public name: string;
  public energyBar = 0;
  public healthBar = 0;
  public moraleBar = 0;
  menuOpen = false;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.energy) {
      this.energyBar = 100 - this.energy;
    }
    if (this.health) {
      this.healthBar = 100 - this.health;
    }
    if (this.morale) {
      this.moraleBar = 100 - this.morale;
    }
  }
}
