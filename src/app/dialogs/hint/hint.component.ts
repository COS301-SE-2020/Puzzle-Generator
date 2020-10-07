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
  display = 'none';

  constructor(private api: APIService, private router: Router, private dialog: MatDialog,
    public dialogRef: MatDialogRef<SolveDialogComponent>, 
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any){
      this.fromPage = data.pageValue;
    }

    async delay(ms: number) {
      await new Promise(resolve => setTimeout(()=>resolve(), ms))
      .then( () => { console.log("fired"); });
    }

  ngOnInit(): void {
    this.display = 'block';
    this.delay(2500).then( () =>{
        this.display = 'none';
      });
  }

}
