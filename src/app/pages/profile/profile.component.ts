import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from 'src/app/dialogs/login-dialog/login-dialog.component';
import { ProfileUpdateDialogComponent } from 'src/app/dialogs/profile-update-dialog/profile-update-dialog.component';

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
  loginDialog: MatDialogRef<LoginDialogComponent>;
  updatePorfileDialog: MatDialogRef<ProfileUpdateDialogComponent>;
  playerLevel: number;
  increaseBy: number;
  playerXP: number;
  object: any;

  constructor(private api: APIService, private formBuilder: FormBuilder, private router: Router, private dialog: MatDialog) { }

  updateName(){
    this.currentUser = null;
      if(this.nameTextboxValue != undefined){
      this.currentUser = {
        "token": localStorage.getItem('token'),
        "name": this.nameTextboxValue
      }
      localStorage.removeItem('name');
      localStorage.setItem('name', this.currentUser['name']);
      this.api.updateName(this.currentUser).subscribe( data => {
        this.currentUserObject['name'] = data['name'];
      });
      this.updatePorfileDialog = this.dialog.open(ProfileUpdateDialogComponent, { disableClose: true, hasBackdrop: true });
      //---------open dialog to say "Profile Updated"
      //alert("Name updated");
    }
    else{ console.log("No value provided");}
    //location.reload();
  }

  checkLevel(currPlayerXP: any){
    if(currPlayerXP <= 200 ){ this.playerLevel = 1}
    else if(currPlayerXP >= 201 && currPlayerXP <= 350 ){ this.playerLevel = 2}
    else if(currPlayerXP >= 351 && currPlayerXP <= 500 ){ this.playerLevel = 3}
    else if(currPlayerXP >= 501 && currPlayerXP <= 750){ this.playerLevel = 4}
    else if(currPlayerXP >= 751 ){ this.playerLevel = 5}
    //updateXP
    this.object = {
      "token": localStorage.getItem('token'),
      "level": this.playerLevel
    }
    this.api.updateLevel(this.object).subscribe( data=> {
      this.playerLevel = data['level'];
    });
    return this.playerXP;
  }

  updateUsername(){
    this.currentUser = null;
    if(this.usernameTextboxValue != undefined){
    this.currentUser = {
      "token": localStorage.getItem('token'),
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
    ],
    'name': [
      { type: 'required', message: 'Full name is required.' },
      { type: 'pattern', message: 'Name can only consist of letters' }
    ]
  }

  ngOnInit(): void {

    if(!localStorage.getItem('token')){
      this.router.navigate(['/index']);
      this.loginDialog = this.dialog.open(LoginDialogComponent, { disableClose: true, hasBackdrop: true });
      //alert("You are not logged in");
    }

    this.currentUser = {
      "token": localStorage.getItem('token')
    }

    this.api.getUser(this.currentUser).subscribe( data => {
      this.currentUserObject = data;
      // console.log("user: ",data);

      this.updateNameForm = this.formBuilder.group({
        name: [data['name'], [Validators.required, Validators.pattern('[a-zA-Z ]*')]]
      });

      this.updateUsernameForm = this.formBuilder.group({
        username: [data['username'], [Validators.required, Validators.email]]
      });
      this.playerLevel = data['level'];
      this.playerXP = data['xp'];
      this.playerLevel = this.checkLevel(this.playerXP);

    });
  }

}
