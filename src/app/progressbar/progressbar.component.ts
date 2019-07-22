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
  constructor() { }

  ngOnInit() {



  }
  ngOnChanges() {
    console.log(this.energy)
  }
}
