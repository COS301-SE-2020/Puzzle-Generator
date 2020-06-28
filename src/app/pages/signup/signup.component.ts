import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl, AbstractControl } from '@angular/forms';
import { User } from '../../models/user';
import { validateBasis } from '@angular/flex-layout';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  newUser: User;
  control: AbstractControl;

  constructor(private formBuilder: FormBuilder) {}

  // email = new FormControl('', [Validators.required, Validators.email]);
  // name = new FormControl('', [Validators.required])
  // password = new FormControl('', [Validators.required, Validators.minLength(8)])
  // confirmPassword = new FormControl('', [Validators.required])

  createNewUser(createUser: User){
    console.log(createUser);
  }

  // getNameErrorMessage() {
  //   if (this.name.hasError('required')) {
  //     return 'Please input a value';
  //   }
  //   return this.name.hasError('name') ? 'Not a valid name' : '';
  // }

  // getEmailErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'Please input a value';
  //   }
  //   return this.email.hasError('email') ? 'Not a valid email address' : '';
  // }

  // getPasswordErrorMessage() {
  //   if (this.password.hasError('required')) {
  //     return 'Please input a value';
  //   }
  //   return this.password.hasError('password') ? 'Too short' : '';
  // }

  // getConfirmPasswordErrorMessage() {
  //   if (this.confirmPassword.hasError('required')) {
  //     return 'Please input a value';
  //   }
    
  //   console.log("---> ", this.password);
  //   console.log("---> ", this.confirmPassword)
  //   if (this.password !== this.confirmPassword) {
  //     return 'Passwords do not match';
  //   }
  // }

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
      { type: 'minlength', message: 'Password must have more than 8 characters.' }
    ],
    'confirmPassword': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'Password must have more than 8 characters.' }
    ],
  }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({ 
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    }); 
  }

}