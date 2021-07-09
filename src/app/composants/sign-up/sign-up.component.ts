import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import { MustMatch } from '../../_helpers/must-match.validator';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      password1: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      password2: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    }, {
      validator: MustMatch('password1', 'password2')
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}

//TUTO
// export class RegisterComponent implements OnInit {
//   form: any = {
//     username: null,
//     email: null,
//     password: null
//   };
//   isSuccessful = false;
//   isSignUpFailed = false;
//   errorMessage = '';
//
//   constructor(private authService: AuthService) { }
//
//   ngOnInit(): void {
//   }
//
//   onSubmit(): void {
//     const { username, email, password } = this.form;
//
//     this.authService.register(username, email, password).subscribe(
//       data => {
//         console.log(data);
//         this.isSuccessful = true;
//         this.isSignUpFailed = false;
//       },
//       err => {
//         this.errorMessage = err.error.message;
//         this.isSignUpFailed = true;
//       }
//     );
//   }
