
import { Component, OnInit, Optional, Inject } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { initializeDataSolve } from 'src/assets/js/solvePuzzle.js';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HintComponent } from 'src/app/dialogs/hint/hint.component';

@Component({
  selector: 'app-solve-dialog',
  templateUrl: './solve-dialog.component.html',
  styleUrls: ['./solve-dialog.component.css']
})
export class SolveDialogComponent implements OnInit {

  token: any;

  fromPage: number;
  showHintButton: boolean = false;
  showMe:boolean = false;
  hintImage: any;

  display = "none";

  hintDialog: MatDialogRef<HintComponent>;

  constructor(private api: APIService, private router: Router, private dialog: MatDialog,
    public dialogRef: MatDialogRef<SolveDialogComponent>, 
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any){
      this.fromPage = data.pageValue;
    }

    async delay(ms: number) {
      await new Promise(resolve => setTimeout(()=>resolve(), ms))
      .then( () => { console.log("fired"); });
    }

    showImage(){
      let puzzleID = localStorage.getItem('solvingPuzzleID');
      if(this.fromPage > 0)
      {
        this.fromPage = this.fromPage - 1;
        this.api.getAllPuzzleByID(parseInt(puzzleID)).subscribe( data => {
          // this.hintDialog = this.dialog.open(HintComponent, { 
          //   disableClose: true, hasBackdrop: true,
          //   data: { pageValue:  data[0].image} 
          // });
          this.hintImage = data[0].image;
          // this.showMe = true;
          // this.delay(2000).then( () =>{
          //   this.showMe = false;
          // });
          this.display = 'block';
          this.delay(2500).then( () =>{
              this.display = 'none';
            });
        })
      }
    }

    handleEvent(event: any){
      if(event == stop()){
        alert("Done")
      }
    }

  ngOnInit(): void {
    if(!localStorage.getItem('token')){
      this.router.navigate(['/index']);
      alert("You are not logged in");
    }

    this.token =  localStorage.getItem('token');
    initializeDataSolve();

    if(this.fromPage == 5){
      this.showMe = true;
    }
    else{
      this.showHintButton = true;
    }

  }

}
