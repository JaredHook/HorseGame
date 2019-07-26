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
  public energyBar = 0;
  public healthBar = 0;
  public moraleBar = 0;



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
