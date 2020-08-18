import { Component, OnInit } from '@angular/core';
import { Puzzle } from 'src/app/models/Puzzle';
import { Observable } from 'rxjs';
import { APIService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RateDialogComponent } from '../../rate-dialog/rate-dialog.component';

@Component({
  selector: 'app-profile-ratings',
  templateUrl: './profile-ratings.component.html',
  styleUrls: ['./profile-ratings.component.css']
})
export class ProfileRatingsComponent implements OnInit {

  currentUser: any;
  //user puzzle ratings variables
  //ratingList: Observable <any[]> ;
  userRatingsList: any;
  text: boolean;
  ratePID: number;
  ratingEntry: any;
  rateDialogRef: MatDialogRef<RateDialogComponent>;
  show: boolean;

  constructor(private api: APIService, private router: Router, private dialog: MatDialog) { }

  getUserPuzzleRatings(){
    this.api.getPuzzleRatingsByUser(this.currentUser).subscribe( data => {
      this.userRatingsList = data;
      if (data[0]==null)
      {
        this.text = true;
      }
      this.show = false;
    });
  }

  checkData(data: any){
    this.ratePID = data;
  }

  openRateDialog(){
    this.rateDialogRef = this.dialog.open(RateDialogComponent);

    this.rateDialogRef.afterClosed().subscribe( result => {
      if (result != ""){

        this.ratingEntry = {
        //"id":this.rateUID,
          "puzzleID":this.ratePID,
          "rating":result,
          "token": localStorage.getItem('token')
        }

        console.log(this.ratingEntry);

        if(this.api.createNewPuzzleRating(this.ratingEntry).subscribe())
        {
          alert("Rating added");
        }

        location.reload();
      }

    });
  }

  openAndCheck(rateP: any){
    this.checkData(rateP);
    this.openRateDialog();
  }

  ngOnInit(): void {

    if(!localStorage.getItem('token')){
      this.router.navigate(['/index']);
      alert("You are not logged in");
    }

    this.currentUser = {
      "token": localStorage.getItem('token')
    }

    this.show = true;
    this.text = false;

    this.getUserPuzzleRatings();
  }

}
