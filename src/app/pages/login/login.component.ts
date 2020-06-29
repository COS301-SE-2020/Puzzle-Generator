import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { APIService } from 'src/app/servives/api.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  verifyUser: any;
  errorr: string;

  constructor(private formBuilder: FormBuilder, private api: APIService) {}

  //method for logging in user and getting the token associated with the said user
  loginUser(currentUser: User){
    if(currentUser !== null){
      this.verifyUser = {
        "username":currentUser.email,
        "password":currentUser.password
      }
      this.api.loginUser(this.verifyUser).subscribe( data => {
        console.log(data);
      })
    }
  }

  //error messages used during login/register validation
  error_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'email', message: 'Invalid email format.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must have at least 6 characters.' }
    ]
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({ 
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

}