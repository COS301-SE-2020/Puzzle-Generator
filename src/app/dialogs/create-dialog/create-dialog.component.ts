import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.css']
})
export class CreateDialogComponent implements OnInit {
  

  constructor(private router: Router, private dialog: MatDialog) { }

  clicked(){
    this.router.navigate(['/profilePuzzles']);
  }

  ngOnInit(): void {
  }

}
