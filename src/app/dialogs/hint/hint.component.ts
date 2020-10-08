import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import { SolveDialogComponent } from '../solve-dialog/solve-dialog.component';

@Component({
  selector: 'app-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.css']
})
export class HintComponent implements OnInit {

  fromPage: any;
  solveDialog: MatDialogRef<SolveDialogComponent>;

  constructor(private api: APIService, private router: Router, private dialog: MatDialog){}

    easy(){
      this.solveDialog = this.dialog.open(SolveDialogComponent,
        { 
          disableClose: true, hasBackdrop: true,
          data: { pageValue: 5 } 
        });
    }
  
    med(){
      this.solveDialog = this.dialog.open(SolveDialogComponent, 
        { 
          disableClose: true, hasBackdrop: true,
          data: { pageValue: 3 } 
        });
    }
  
    hard(){
      this.solveDialog = this.dialog.open(SolveDialogComponent, 
        { 
          disableClose: true, hasBackdrop: true,
          data: { pageValue: 0 } 
        });
    }

  ngOnInit(): void {}

}
