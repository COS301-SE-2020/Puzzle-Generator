import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-update-dialog',
  templateUrl: './profile-update-dialog.component.html',
  styleUrls: ['./profile-update-dialog.component.css']
})
export class ProfileUpdateDialogComponent implements OnInit {

  constructor() { }

  clicked(){
    location.reload();
  }

  ngOnInit(): void {
  }

}
