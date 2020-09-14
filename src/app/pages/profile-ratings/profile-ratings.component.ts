import { Component, OnInit } from '@angular/core';
import { Puzzle } from 'src/app/models/Puzzle';
import { Observable } from 'rxjs';
import { APIService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RateDialogComponent } from '../../rate-dialog/rate-dialog.component';
import { PageEvent } from '@angular/material/paginator';
import { LoginDialogComponent } from 'src/app/dialogs/login-dialog/login-dialog.component';

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
  deleteVal: any;

  totalNumberOfPuzzles: number;
  ratingsLSize: number;

  //pagination
  pageSize: number = 6;
  startIndex:number = 0;
  endIndex: number = 6;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  loginDialog: MatDialogRef<LoginDialogComponent>;

  constructor(private api: APIService, private router: Router, private dialog: MatDialog) { }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  changeEvent(event: PageEvent)
  {
    console.log("Event: ", event);
    this.startIndex = event.pageIndex * event.pageSize;
    this.endIndex = this.startIndex + this.pageSize;
    if(this.endIndex > this.totalNumberOfPuzzles){
      this.endIndex = this.totalNumberOfPuzzles
    }
    this.userRatingsList.slice(this.startIndex, this.endIndex);
    return event;
  }

  nameDescending()
  {
    return this.userRatingsList.sort( (a,b) => {
      let paramA = a.puzzleName.toLowerCase();
      let paramB = b.puzzleName.toLowerCase();

      if(paramA > paramB ){ return -1; }
      else { return 1; }
      return 0;
    });
  }

  nameAscending()
  {
    return this.userRatingsList.sort( (a,b) => {
      let paramA = a.puzzleName.toLowerCase();
      let paramB = b.puzzleName.toLowerCase();

      if(paramA < paramB ){ return -1; }
      else { return 1; }
      return 0;
    });
  }

  ratingDescending()
  {
    return this.userRatingsList.sort( (a,b) => {
      let paramA = a.rating;//.toLowerCase();
      let paramB = b.rating;//.toLowerCase();

      if(paramA > paramB ){ return -1; }
      else { return 1; }
      return 0;
    });
  }

  ratingAscending()
  {
    return this.userRatingsList.sort( (a,b) => {
      let paramA = a.rating;//.toLowerCase();
      let paramB = b.rating;//.toLowerCase();

      if(paramA < paramB ){ return -1; }
      else { return 1; }
      return 0;
    });
  }

  getUserPuzzleRatings(){
    this.api.getPuzzleRatingsByUser(this.currentUser).subscribe( data => {
      this.totalNumberOfPuzzles = Object.keys(data).length;
      this.userRatingsList = data;
      this.show = false;
      this.text = false;
      if (this.totalNumberOfPuzzles == 0){
        this.text = true;
      }
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

  delete(ratePID: any){
    this.deleteVal = {
      "puzzleID" : ratePID,
      "token" : localStorage.getItem('token')
    }

  this.api.findRatingID(this.deleteVal).subscribe( (result) => {
    if(this.api.deleteRating(result["id"]).subscribe()){
        alert("Rating deleted");
        location.reload();
    }
  });

  }

  ngOnInit(): void {

    if(!localStorage.getItem('token')){
      this.router.navigate(['/index']);
      this.loginDialog = this.dialog.open(LoginDialogComponent);
      // alert("You are not logged in");
    }

    this.currentUser = {
      "token": localStorage.getItem('token')
    }

    this.show = true;
    this.text = false;

    this.getUserPuzzleRatings();
  }

}
