import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Breed } from '../breed';
import { Color } from '../color';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { BreedService } from '../../services/breed.service';
import { ColorService } from '../../services/color.service';
import { HorseService } from '../../services/horse.service';
import { resolve } from 'q';
import { MatDialog } from '@angular/material';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})

export class SignupPageComponent implements OnInit {
  breeds: Breed[] = [];
  allBreeds: Breed[];
  // colors
  colors: Color[] = [];

  allColors: Color[];
  imgDefHorse = 'pony';
  imgDefColor = 'gr-pml';
  imgBaseUrl = 'assets/horses/';
  imgUrl: string;


  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    public userService: UserService,
    public breedService: BreedService,
    public colorService: ColorService,
    public horseService: HorseService,
    public dialog: MatDialog) {
    this.imgUrl = this.imgBaseUrl + this.imgDefHorse + '/' + this.imgDefColor + '.png';
  }

  // these are some getters to help with readability in the html
  get login() {
    return this.signupForm.get('login');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get email() {
    return this.signupForm.get('email');
  }


  signupForm = this.fb.group({
    login: ['', [Validators.required, Validators.minLength(3)]],

    password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z\d$@$!%*?&].{8,}')]], // length of at least 8 aplhanumeric characters. Must contain lowercase uppercase and a   can contain special characters
    DoB: this.fb.group({
      day: [''],
      month: [''],
      year: [''],
    }),
    email: ['', [Validators.required, Validators.email]],
    terms: ['', [Validators.requiredTrue]],
    breed: [''],
    color: ['']
  });

  ngOnInit() {
    // makeHeaders();
    console.log('success');
    this.allBreeds = this.getBreeds();
    // this.getBreeds();
    this.allColors = this.getColors();
  }

  getBreeds(): Breed[] {
    this.http
     .get<Breed[]>('http://localhost/horseGameBackend/display_breeds.php')
     .subscribe((data) => {
       let br = data as Array<Breed>;
       for (let i = 0; i < br.length; i++) {
         let breed = new Breed(br[i].id, br[i].breed_key, br[i].breed, br[i].best_skill);
         this.breeds.push(breed);
       }
     })
    return this.breeds;
    // this.breedService.getBreeds()
    //   .subscribe(result => {
    //     console.log(result);
    //     const br = result as Array<Breed>;
    //     for (let i = 0; i < br.length; i++) {
    //       const breed = new Breed(br[i].key, br[i].breed, br[i].breed_id);
    //       this.breeds.push(breed);
    //     }
    //   });
    // return this.breeds;
  }

  getColors(): Color[] {
     this.http
       .get<Color[]>('http://localhost/horseGameBackend/display_colors.php')
       .subscribe((data) => {
         let cl = data as Array<Color>;
         for (let i = 0; i < cl.length; i++) {
           let color = new Color(cl[i].id, cl[i].color_key, cl[i].color);
           this.colors.push(color);
         }
       })
    // this.colorService.getColors()
    //   .subscribe(result => {
    //     console.log(result);
    //     const br = result as Array<Color>;
    //     for (let i = 0; i < br.length; i++) {
    //       const color = new Color(br[i].key, br[i].color, br[i].color_id);
    //       this.colors.push(color);
    //     }
    //   });
    return this.colors;
  }
  
  onSubmit() {
    let horse = this.horseService.createRandomHorse(this.signupForm.value);
    // php backend (was Julia's backend Avvellin Falls)
    this.http
      .post(
        'http://localhost/horseGameBackend/signup.php',
        {
          "login": this.login.value,
          "email": this.email.value,
          "password": this.password.value,
          "terms": this.signupForm.get("terms").value,
           "breed": horse.breed,
           "color": horse.color,
           "name": horse.name,
           "gender": horse.gender,
           "stamina": horse.stamina,
           "speed": horse.speed,
           "gallop": horse.gallop,
           "dressage": horse.dressage,
           "trot": horse.trot,
           "jumping": horse.jumping,
           "height": horse.height,
           "weight": horse.weight,
           "energy": horse.energy,
           "health": horse.health,
           "morale": horse.morale,
           "dayTime": horse.dayTime,
           "tr_stamina": horse.tr_stamina,
           "tr_speed": horse.tr_speed,
           "tr_gallop": horse.tr_gallop,
           "tr_trot": horse.tr_trot,
           "tr_jumping": horse.tr_jumping,
           "tr_dressage": horse.tr_dressage,
           "isInBed": horse.isInBed,
           "isFed": horse.isFed,
        }
      )
      .subscribe(
        (val) => {
          console.log("POST call successful value returned in body",
            val);
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });

    // this.router.navigate(['/play']);

    // this is for firebase
    // this.userService.createUser(this.signupForm.value)
    //   .then(
    //     res => {
    //       this.horseService.createRandomHorse(this.signupForm.value, res.id).subscribe(e => {
    //         this.router.navigate(['/play/' + e.id]);
    //         localStorage.setItem('user', res.id);
    //         localStorage.getItem('user');
    //       });
    //       // this.router.navigate(['/home']);
    //     }
    // ).catch(error => {
    //   console.error("Error creating user: ", error);
    //   });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(LoginFormComponent, {
      panelClass: ['no-padding', 'no-scrolls'],
      height: '400px',
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('the dialog was closed');
    });
  }
  // imgDefHorse = 'achal-tecke';
  // imgDefColor = 'gr-pml';
  // imgBaseUrl = 'assets/horses/';
  // imgUrl:  ;

  getBreedKey(keyb: string ) {
    this.imgUrl = this.imgBaseUrl + keyb + '/' + this.imgDefColor + '.png';
    this.imgDefHorse = keyb;
  }

  getColorKey(keyc: string ) {
    this.imgUrl = this.imgBaseUrl + this.imgDefHorse + '/' + keyc + '.png';
    this.imgDefColor = keyc;
  }
}
