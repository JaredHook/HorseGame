import { Component, OnInit } from '@angular/core';
import { HorseService } from '../../services/horse.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public horseService: HorseService) { }

  ngOnInit() {
  }

  generateRandomHorse() {
    this.horseService.createRandomHorse(new MockHorse());
  }
  
}

export class MockHorse {
  
  breed = 1;
  color = 1;
}
