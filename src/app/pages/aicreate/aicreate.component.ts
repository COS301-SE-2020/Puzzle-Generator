import { Component, OnInit } from '@angular/core';
import { initializeDataAI } from 'src/assets/js/aiCreation.js';
import { Router } from '@angular/router';
import { Colors, Color } from 'angular-bootstrap-md';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CreateDialogComponent } from 'src/app/dialogs/create-dialog/create-dialog.component';
import { LoginDialogComponent } from 'src/app/dialogs/login-dialog/login-dialog.component';

@Component({
  selector: 'app-aicreate',
  templateUrl: './aicreate.component.html',
  styleUrls: ['./aicreate.component.css']
})
export class AICreateComponent implements OnInit {

  token: any;
  col: Color;
  color: Colors;
  name: any;
  description: any;
  createDialog: MatDialogRef<CreateDialogComponent>;
  loginDialog: MatDialogRef<LoginDialogComponent>
  
  constructor(private router: Router, private dialog: MatDialog) { }

  success(){
    this.createDialog = this.dialog.open(CreateDialogComponent, { disableClose: true, hasBackdrop: true });
  }

  ngOnInit(): void {
    if(!localStorage.getItem('token')){
      this.router.navigate(['/index']);
      this.loginDialog = this.dialog.open(LoginDialogComponent, { disableClose: true, hasBackdrop: true });
      //alert("You are not logged in");
    }
  	initializeDataAI();
    this.token = localStorage.getItem('token');
  }

}
