import { Component, OnInit } from '@angular/core';

import { MustMatch } from '../../_helpers/must-match.validator';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  form: any = {
    username: null,
    password1: null,
    password2: null,
    validator: MustMatch('password1', 'password2'),
    reset(){
      this.username = null
      this.password1 = null
      this.password2 = null
    }
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(){

  }

  onSubmit() {
    const { username, password1, password2 } = this.form;
    this.authService.register(username, password1).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  onReset() {
    this.form.reset();
  }

}
