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
  xppoints: number;

  token: any;
  solveDialog: MatDialogRef<SolveDialogComponent>
  loginDialog: MatDialogRef<LoginDialogComponent>;

  timeDif:any; timeDur:any; timeID:any; timeImage:any; timeName:any;
  solveDif:any; solveHints:any; solveID:any; solveImage: any; solveName:any;

  puzzleOneID:any; puzzleOneName:any; puzzleOneImage:any; puzzleOneDifficulty:any; oneHints: any; oneXP:any;
  puzzleTwoID:any; puzzleTwoName:any; puzzleTwoImage:any; puzzleTwoDifficulty:any; twoHints: any; twoXP: any;
  puzzleThreeID:any; puzzleThreeName:any; puzzleThreeImage:any; puzzleThreeDifficulty:any; threeHints: any; threeXP: any;

  constructor(private api: APIService, private router: Router, private dialog: MatDialog) { }

  openSolveDialogEasy(puzzleID: any){
   localStorage.setItem('solvingPuzzleID', puzzleID);
    this.solveDialog = this.dialog.open(SolveDialogComponent, { 
      disableClose: true, hasBackdrop: true,
      data: { pageValue:  5} 
    });
  }

  openSolveDialogMed(puzzleID: any){
    localStorage.setItem('solvingPuzzleID', puzzleID);
     this.solveDialog = this.dialog.open(SolveDialogComponent, { 
       disableClose: true, hasBackdrop: true,
       data: { pageValue:  3} 
     });
   }

   openSolveDialogHard(puzzleID: any){
    localStorage.setItem('solvingPuzzleID', puzzleID);
     this.solveDialog = this.dialog.open(SolveDialogComponent, { 
       disableClose: true, hasBackdrop: true,
       data: { pageValue:  0} 
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
      console.log("Got da data", data['puzzleOneName']);
      this.puzzleOneID = data['puzzleOneID'];
      this.puzzleOneName = data['puzzleOneName'];
      this.puzzleOneImage = data['puzzleOneImage'];
      this.puzzleOneDifficulty = data['puzzleOneDifficulty'];
      this.oneXP = 10;
      this.oneHints = 5;

      //
      this.puzzleTwoID = data['puzzleTwoID'];
      this.puzzleTwoName = data['puzzleTwoName'];
      this.puzzleTwoImage =data['puzzleTwoImage'];
      this.puzzleTwoDifficulty = data['puzzleTwoDifficulty'];
      this.twoXP = 30;
      this.twoHints = 3;

      //
      this.puzzleThreeID = data['puzzleThreeID'];
      this.puzzleThreeName = data['puzzleThreeName'];
      this.puzzleThreeImage = data['puzzleThreeImage'];
      this.puzzleThreeDifficulty = data['puzzleThreeDifficulty'];
      this.threeXP = 50;
      this.threeHints = 0;
      
      // this.timeDif = data[0].timeDifficulty;
      // this.timeID = data[0].timeID;
      // this.timeImage = data[0].timeImage;
      // this.timeName = data[0].timeName;
      // if(this.timeDif == "Novice"){ this.timeDur = 90; this.xppoints = 10;}
      // else if(this.timeDif == "Intermediate"){ this.timeDur = 45; this.xppoints = 30;}
      // else if (this.timeDif == "Expert"){ this.timeDur = 25; this.xppoints = 50;}
      // //
      // this.solveDif = data[1].solveDifficulty;
      // this.solveID = data[1].solveID;
      // this.solveImage = data[1].solveImage;
      // this.solveName = data[1].solveName;
      // if(this.solveDif == "Novice"){ this.solveHints = 5; this.xppoints = 10;}
      // else if(this.solveDif == "Intermediate"){ this.solveHints = 3; this.xppoints = 30;}
      // else if(this.solveDif == "Expert"){ this.solveHints = 0; this.xppoints = 50;}
    })
  }

}
