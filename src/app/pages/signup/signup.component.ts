import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../../models/user';
import { APIService } from '../../servives/api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  newUser: any;
  errorr: string;

  constructor(private formBuilder: FormBuilder, private api: APIService) {}

  //method for creating a new user. A new JSON object is created and sent to the node api
  createNewUser(createUser: any){
    this.errorr = '';
    if(this.doPasswordsMatch(this.signUpForm.controls['password'].value, this.signUpForm.controls['confirmPassword'].value) == true){
      this.newUser = {
        "name": createUser.name,
        "username": createUser.email,
        "password": createUser.password
      }
      if(this.newUser != null){
        this.api.createUser(this.newUser).subscribe( data => {
          console.log(data);
          if(HttpErrorResponse['status'] === 409){
            this.errorr = "Email already registers in the db";
            console.log("User Already Exists")}
        })
      }
    }
    else
    {  
      this.errorr = "Passwords no match";
    }
  }

  //error messages used during login/register validation
  error_messages = {
    'name': [
      { type: 'required', message: 'Full name is required.' },
      { type: 'pattern', message: 'Name can only consist of letters' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'email', message: 'Invalid email format.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must have at least 6 characters.' }
    ],
    'confirmPassword': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'Password must have at least 6 characters.' }
    ],
  }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({ 
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  //checking if passwords match
  doPasswordsMatch(firstPassword: string, secondPassword: string) {
        if (firstPassword !== secondPassword) {
          //this.errorr = "Passwords do not match: " + controlName + " " + matchingControlName;
            return false;
        } else {
          //this.errorr = "Match: " + controlName + " " + matchingControlName;
          return true;
        }
    }

}