import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-profile-puzzles-dialog',
  templateUrl: './profile-puzzles-dialog.component.html',
  styleUrls: ['./profile-puzzles-dialog.component.css']
})
export class ProfilePuzzlesDialogComponent implements OnInit {

  fromPage: string;

  constructor( public dialogRef: MatDialogRef<ProfilePuzzlesDialogComponent>, 
              @Optional() @Inject(MAT_DIALOG_DATA) public data: any) 
  {
    this.fromPage = data.pageValue;
  }

  clicked(){
    location.reload();
  }

  ngOnInit(): void {
  }

}
