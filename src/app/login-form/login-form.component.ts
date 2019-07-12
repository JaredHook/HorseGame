import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators, FormBuilder }
  from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
//export class LoginFormComponent {
//  form: FormGroup;

//  constructor(fb: FormBuilder, public userService: UserService) {
//    this.userService = userService;
//    this.form = fb.group({
//      "login": this.login,
//      "password": ["", Validators.required]
//    });
//  }

//  get login() {
//    return this.form.get('login');
//  }
//  get password() {
//    return this.form.get('password');
//  }

//  onSubmit() {
//    console.log("form submitted");
//    console.log(this.form);
//    this.userService.loginUsers(this.form.value);
//  }
//}
export class LoginFormComponent {

  constructor(private fb: FormBuilder,
    public userService: UserService) { }

  get login() {
    return this.loginForm.get('login');
  }
  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit() {
    console.log('success');
  }

  loginForm = this.fb.group({
    login: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z\d$@$!%*?&].{8,}')]],//length of at least 8 aplhanumeric characters. Must contain lowercase uppercase and a number can contain special characters
  })

  onSubmit() {
    console.log(this.loginForm.value);
    this.userService.loginUsers(this.loginForm.value)
      .subscribe(
        res => {
          console.log(res)
        }
      )
  }
}
