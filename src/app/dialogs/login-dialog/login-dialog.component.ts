import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  constructor(private router: Router, private dialog: MatDialog) { }

  clicked(){
    this.router.navigate(['/index']);
  }

  ngOnInit(): void {
  }

}
