import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { APIService } from 'src/app/services/api.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { EmailPassComponent } from 'src/app/dialogs/email-pass/email-pass.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  verifyUser: any;
  formError: string;
  fieldTextType: boolean;
  emailDialogRef: MatDialogRef<EmailPassComponent>;
  entry: any;

  constructor(private formBuilder: FormBuilder, private api: APIService, private router: Router, private dialog: MatDialog) {}
  //method for logging in user and getting the token associated with the said user

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }


  loginUser(currentUser: User){
    this.formError = '';
    if(currentUser !== null){
      this.verifyUser = {
        "username":currentUser.email,
        "password":currentUser.password
      }

      this.api.loginUser(this.verifyUser).subscribe(
        data => {
          localStorage.removeItem('name');
          localStorage.setItem('name', data['name']);
          localStorage.removeItem('token');
          localStorage.setItem('token', data['token']);

        this.formError = "";
        this.router.navigate(['/ratings']);

        setTimeout(()=>{
          localStorage.removeItem('token');
          this.router.navigate(['login']);
          alert("You have been logged out after 1 hour");
        },3600000);
      },
        error => {//if status code other than in the 200 range returned, show error
          console.log('Error from API: ', error.error);
          if(error.status >= 401){
            this.formError = error.error;
          }
        })
    }

  }

  sendMail(){
    this.emailDialogRef = this.dialog.open(EmailPassComponent, { disableClose: true, hasBackdrop: true });

    this.emailDialogRef.afterClosed().subscribe( result => {

      if (result != ""){

        this.entry = {
        //"id":this.rateUID,
          "username": result
        }

        if(this.api.requestPasswordChange(this.entry).subscribe())
        {
          alert("Email will be send to you.")
          //alert("Rating added");
        }
      }

    });
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
