import { Component, OnInit } from '@angular/core';
import { initializeData } from 'src/assets/js/manualCreation.js';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CreateDialogComponent } from 'src/app/dialogs/create-dialog/create-dialog.component';

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
  constructor(private router: Router, private dialog: MatDialog) { }

  success(){
    this.createDialog = this.dialog.open(CreateDialogComponent);
  }

  ngOnInit(): void {

    if(!localStorage.getItem('token')){
      this.router.navigate(['/index']);
      alert("You are not logged in");
    }

    initializeData();
    this.token = localStorage.getItem('token');
  }

}
