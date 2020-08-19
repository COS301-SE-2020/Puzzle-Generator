import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { APIService } from 'src/app/services/api.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  verifyUser: any;
  formError: string;
  resetDone: string;
  fieldTextType: boolean;
  fieldTextType2: boolean;

  constructor(private formBuilder: FormBuilder, private api: APIService, private router: Router ) {}

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  toggleFieldTextType2() {
    this.fieldTextType2 = !this.fieldTextType2;
  }

  //method for logging in user and getting the token associated with the said user
  resetPassword(currentUser: User){
    this.resetDone = '';
    this.formError = '';
    if(this.doPasswordsMatch(this.resetPasswordForm.controls['password'].value, this.resetPasswordForm.controls['confirmPassword'].value) == true){
      this.verifyUser = {
        "username": currentUser.email,
        "password": currentUser.password
      }
      if(this.verifyUser != null){
        this.api.resetPassword(this.verifyUser).subscribe(
          () => {},
          error => {//if status code other than in the 200 range returned, show error
            if(error.status >= 401){
              this.formError = error.error;
            }
            else
            {
              this.router.navigate(['/resetSuccess', { message: "Password reset. Please login" }]);
            }
          })
      }
    }
    else
    {
      this.formError = "Passwords do not match";
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
    ],
    'confirmPassword': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'Password must have at least 6 characters.' }
    ],
  }

  ngOnInit() {

    this.resetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  //checking if passwords match
  doPasswordsMatch(firstPassword: string, secondPassword: string) {
    if (firstPassword !== secondPassword) {
        return false;
    } else {
      return true;
    }
}

}
