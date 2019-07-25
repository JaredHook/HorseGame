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

<<<<<<< HEAD
  // tslint:disable-next-line:use-lifecycle-interface
=======
>>>>>>> 7959e4095998f3f33338f7111d0af6f9c32973fd
  ngOnChanges() {

    try {
      // tslint:disable-next-line:max-line-length
      this.totalSkills = (Number(this.stamina) || 0) + (Number(this.speed) || 0) + (Number(this.gallop) || 0) + (Number(this.trot) || 0) + (Number(this.jumping) || 0) + (Number(this.dressage) || 0);

<<<<<<< HEAD
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

=======
    }
    catch (e) {
      console.log(e)
>>>>>>> 7959e4095998f3f33338f7111d0af6f9c32973fd

      if (isNaN(this.totalSkills)) { throw new Error('this is not a number'); }
      if (this.totalSkills === 0) { throw new Error('total skills are not valid'); }
    } catch (e) {
      console.log(e);

    }}}





<<<<<<< HEAD

=======
  }
}
>>>>>>> 7959e4095998f3f33338f7111d0af6f9c32973fd
