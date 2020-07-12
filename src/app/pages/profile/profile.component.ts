import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  nameTextboxValue: string;
  usernameTextboxValue: string;
  currentUserObject:any;
  token: any;
  currentUser: any;
  updateNameForm: FormGroup;
  updateUsernameForm: FormGroup;

  constructor(private api: APIService, private formBuilder: FormBuilder) { }

  updateName(){
    this.currentUser = null;
      if(this.nameTextboxValue != undefined){
      this.currentUser = {
        "token": this.token,
        "name": this.nameTextboxValue
      }
      this.api.updateName(this.currentUser).subscribe( data => {
        this.currentUserObject['name'] = data['name'];
      });
    }
    else{ console.log("No value provided");}
  }

  updateUsername(){
    this.currentUser = null;
    if(this.usernameTextboxValue != undefined){
    this.currentUser = {
      "token": this.token,
      "username": this.usernameTextboxValue
    }
    this.api.updateUsername(this.currentUser).subscribe( data => {
      this.currentUserObject['username'] = data['username'];
    })
  }
  else{console.log("No value provided")}
  }

  error_messages = {
    'username': [
      { type: 'required', message: 'Email is required.' },
      { type: 'email', message: 'Invalid email format.' }
    ]
  }

  ngOnInit(): void {

    this.currentUser = {
      "token": localStorage.getItem('token')
    }

    this.api.getUser(this.currentUser).subscribe( data => {
      this.currentUserObject = data;

      this.updateNameForm = this.formBuilder.group({
        name: [data['name'], [Validators.required, Validators.pattern('[a-zA-Z ]*')]]
      });

      this.updateUsernameForm = this.formBuilder.group({
        username: [data['username'], [Validators.required, Validators.email]]
      });
    });
  }

}
