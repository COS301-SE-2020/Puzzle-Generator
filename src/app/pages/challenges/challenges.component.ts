import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginDialogComponent } from 'src/app/dialogs/login-dialog/login-dialog.component';
import { SolveDialogComponent } from 'src/app/dialogs/solve-dialog/solve-dialog.component';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit {

  date: Date = new Date();  
  day: any = this.date.getDay();
  datee: any = this.date.getDate();
  month: any = this.date.getMonth();
  year: any = this.date.getFullYear();
  months: any[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  actualMonth: any = this.months[this.month];

  token: any;
  solveDialog: MatDialogRef<SolveDialogComponent>
  loginDialog: MatDialogRef<LoginDialogComponent>;

  timeDif:any; timeDur:any; timeID:any; timeImage:any; timeName:any;
  solveDif:any; solveHints:any; solveID:any; solveImage: any; solveName:any;

  constructor(private api: APIService, private router: Router, private dialog: MatDialog) { }

  openSolveDialog(puzzleID: any){
   localStorage.setItem('solvingPuzzleID', puzzleID);
    this.solveDialog = this.dialog.open(SolveDialogComponent, { 
      disableClose: true, hasBackdrop: true,
      data: { pageValue:  this.solveHints} 
    });
  }

  openSolveDialogTime(puzzleID: any){
    localStorage.setItem('solvingPuzzleID', puzzleID);
     this.solveDialog = this.dialog.open(SolveDialogComponent, { 
       disableClose: true, hasBackdrop: true,
       data: { pageValue:  this.timeDur} 
     });
   }

  ngOnInit(): void {
    if(!localStorage.getItem('token')){
      this.router.navigate(['/index']);
      this.loginDialog = this.dialog.open(LoginDialogComponent, { disableClose: true, hasBackdrop: true });
      // alert("You are not logged in");
    }
    this.token = localStorage.getItem('token');
    this.api.getChallenges().subscribe( data => {
      console.log("Got da data", data);
      this.timeDif = data[0].timeDifficulty;
      this.timeDur = data[0].timeDuration;
      this.timeID = data[0].timeID;
      this.timeImage = data[0].timeImage;
      this.timeName = data[0].timeName;
      //
      this.solveDif = data[1].solveDifficulty;
      this.solveHints = data[1].solveHints;
      this.solveID = data[1].solveID;
      this.solveImage = data[1].solveImage;
      this.solveName = data[1].solveName;
    })
  }

}
