import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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

  constructor(fb: FormBuilder,
    userService: UserService,
    private router: Router,) {
    this.userService = userService;
    this.form = fb.group({
      "loginEmail": this.loginEmail,
      "password": ["", Validators.required]
    });
  }

  ngOnInit() {

  }

  onSubmit() {
    let userAuth = this.form;
    console.log("form submitted");
    console.log(this.form);
    this.userService.loginUsers(this.form.value).subscribe(
        res => {
        if (res[0].payload.doc.id) {
         new AuthService(res[0].payload.doc.id)
          this.router.navigate(['/stable']);
        };
      })

    // not logged in so redirect to login page with the return url
    // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });

  }

  }



