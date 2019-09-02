import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HorseService } from '../../services/horse.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  public userService: UserService;

  firstName = new FormControl("", Validators.required);
  loginEmail: any;
  error = false;

  constructor(fb: FormBuilder,
    userService: UserService,
    horseService: HorseService,
    public authService: AuthService,
    private http: HttpClient,
    private router: Router) {
    this.userService = userService;
    this.form = fb.group({
      //"loginEmail": this.loginEmail,
      "login": ["", Validators.required],
      "password": ["", Validators.required]
    });
    horseService.setName('jason');
    console.log('the name is ' + horseService.getName())
  }

  ngOnInit() {
  }

  onSubmit() {
    let userAuth = this.form;

    //console.log(this.form.value.login);
    //console.log(this.form.value.password);


    this.http
      .get<User[]>(
        'http://localhost/login.php',

        {
          params: new HttpParams().set('login', this.form.value.login)
            .set('password', this.form.value.password)
        }

        //{
        //  "login": this.form.value.login,
        //  "password": this.form.value.password,
        //}
    )
      .subscribe(
        (val) => {
          this.authService.SignIn(val["id"]);
          this.router.navigate(['/stable']);
          console.log("POST call successful value returned in body",
            val);
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });

    //console.log("form submitted");
    //console.log(this.form);
    //console.log('This is not logged in');
    //this.userservice.loginusers(this.form.value).subscribe(
    //  res => {
    //    //console.log('return value is ' + json.stringify(res));
    //    try {
    //      if (res[0].payload.doc.id) {
    //        console.log(res[0].payload.doc.id);
    //        this.authservice.signin(res[0].payload.doc.id);
    //        this.router.navigate(['/stable']);
    //      };
    //    }
    //    catch (e) {
    //      return this.error = true;
    //    }
    //  })

    // not logged in so redirect to login page with the return url
    // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });

  }
}
