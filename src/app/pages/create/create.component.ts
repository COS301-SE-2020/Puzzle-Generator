import { Component, OnInit } from '@angular/core';
import { initializeData } from 'src/assets/js/manualCreation.js';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CreateDialogComponent } from 'src/app/dialogs/create-dialog/create-dialog.component';
import { LoginDialogComponent } from 'src/app/dialogs/login-dialog/login-dialog.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  token: any;
  name: any;
  description: any;
  createDialog: MatDialogRef<CreateDialogComponent>;
  loginDialog: MatDialogRef<LoginDialogComponent>;

  constructor(private router: Router, private dialog: MatDialog) { }

  success(){
    this.createDialog = this.dialog.open(CreateDialogComponent, { disableClose: true, hasBackdrop: true });
  }

  ngOnInit(): void {

    if(!localStorage.getItem('token')){
      this.router.navigate(['/index']);
      this.loginDialog = this.dialog.open(LoginDialogComponent, { disableClose: true, hasBackdrop: true });
      // alert("You are not logged in");
    }

    initializeData();
    this.token = localStorage.getItem('token');
  }

}
