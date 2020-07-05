import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { APIService } from 'src/app/services/api.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

export var nameVal: string;

export function getName(){
  return nameVal;
}

export function setName(name: string){
  nameVal = name;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  verifyUser: any;
  formError: string;

  constructor(private formBuilder: FormBuilder, private api: APIService, private router: Router) {}
  //method for logging in user and getting the token associated with the said user
  loginUser(currentUser: User){
    this.formError = '';
    if(currentUser !== null){
      this.verifyUser = {
        "username":currentUser.email,
        "password":currentUser.password
      }

      this.api.loginUser(this.verifyUser).subscribe(
        data => { console.log(data);
          setName(data["name"]);
          this.formError = "";
        this.router.navigate(['/ratings']);
      },
        error => {//if status code other than in the 200 range returned, show error
          console.log('Error from API: ', error.error);
          if(error.status >= 401){
            this.formError = error.error;
          }
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
