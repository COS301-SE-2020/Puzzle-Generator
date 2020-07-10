import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { APIService } from 'src/app/services/api.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { PuzzleArr } from './puzzleArr';
import { RatingsArr } from './RatingsArr';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RateDialogComponent } from '../../rate-dialog/rate-dialog.component';
import { PuzzleRating } from 'src/app/models/PuzzleRating';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {

  rateDialogRef: MatDialogRef<RateDialogComponent>;
  puzzles: Array<PuzzleArr> = [];
  name: string;
  ratings: Array<RatingsArr> = [];
  ratePID: number;
  rateUID: string;
  ratingEntry: any;
  formError: string;
  //searchbar
  searchTextboxValue: string;

  constructor(private api: APIService, private cdr: ChangeDetectorRef, private dialog: MatDialog) {
  }

  populate(populatePuz: any)
  {
    this.api.getAllPuzzleRatings().subscribe(
      data=> {
        for(let i=0; data[i]!= null; i++){
          let ratingObj = new RatingsArr();
          ratingObj.id = data[i].id;
          ratingObj.rating = data[i].rating;
          ratingObj.puzzleID = data[i].puzzleID;
          this.ratings.push(ratingObj);

        }
      },
      error => {
        console.log("Error from API: ", error.error);
      });



    if (populatePuz != null)
    {
      this.getPuzzles(populatePuz);
    }
    else
    {
      this.api.getAllPuzzles().subscribe(
        data => {
          this.getPuzzles(data);
      },
        error => {//if status code other than in the 200 range returned, show error
          console.log('Error from API: ', error.error);
        })
    }

  }

  searchItems(searchValue: any){
    if(searchValue != undefined){
      this.api.getSearchedPuzzles(searchValue).subscribe( data => {
        var dataObjectSize = Object.keys(data).length;
        if(dataObjectSize == 0 )
        {
          console.log("Nothing matches given criteria")
        }
        else{
          //Please populate the page with the data received. Other puzzles not fromd data must be cleared
          console.log(data);
          this.populate(data);
        }
      });
    }
  }

  getPuzzles(data: any){
    this.puzzles.length = 0;
    for(let i=0; data[i]!=null; i++)
    {
      let puzzleObj = new PuzzleArr();
      puzzleObj.id = data[i].id;
      puzzleObj.name = data[i].name;
      puzzleObj.description = data[i].description;
      puzzleObj.creator = data[i].creator;
      puzzleObj.created = data[i].createdAt;

      let j = 0;
      let total = 0;

      for (let k=0; this.ratings[k]!=null; k++){
        if (this.ratings[k].puzzleID == data[i].id)
        {
          total = total + this.ratings[k].rating;
          j = j+1;
        }
      }

      if (j == 0){
        puzzleObj.rating = 0;
      }
      else{
        puzzleObj.rating = total/j;
      }
      this.puzzles.push(puzzleObj);
    }

    this.cdr.detectChanges();

  }

  checkData(data: any){
    this.ratePID = data;
    //this.rateUID = localStorage.getItem('token');
    this.rateUID = localStorage.getItem('id');
    //console.log(localStorage.getItem('id'));
  }

  openRateDialog(){
    this.rateDialogRef = this.dialog.open(RateDialogComponent);

    this.rateDialogRef.afterClosed().subscribe( result => {
      //console.log(result);
      //console.log(this.ratePID);
      //console.log(this.rateUID);
      this.ratingEntry = {
        "id":this.rateUID,
        "puzzleID":this.ratePID,
        "rating":result,
        "token": localStorage.getItem('token')
      }

      console.log(this.ratingEntry);

      this.api.createNewPuzzleRating(this.ratingEntry).subscribe();

      location.reload();

      alert("Rating added");

    });
  }

  openAndCheck(rateP: any){
    this.checkData(rateP);
    this.openRateDialog();
  }

  reload(){
    this.populate(null);
  }

  ngOnInit(): void {
    this.populate(null);
  }

}
