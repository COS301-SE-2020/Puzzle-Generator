import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { APIService } from 'src/app/services/api.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { PuzzleArr } from './puzzleArr';
import { RatingsArr } from './RatingsArr';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RateDialogComponent } from '../../rate-dialog/rate-dialog.component';
import { PuzzleRating } from 'src/app/models/PuzzleRating';
import {MatButtonModule} from '@angular/material/button';
import {MatTableDataSource} from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {

  displayedColumns: string[] = ["id","name","description","creator","rating","created","showRating","image"];
  rateDialogRef: MatDialogRef<RateDialogComponent>;
  puzzles: Array<PuzzleArr> = [];
  name: string;
  ratings: Array<RatingsArr> = [];
  ratePID: number;
  rateUID: string;
  ratingEntry: any;
  formError: string;
  show: boolean;
  dataAvailable: boolean;
  //searchbar
  searchTextboxValue: string;
  token: any;
  currentUser: any;
  datasource: any;

  totalNumberOfPuzzles: number;
  ratingsLSize: number;

  //pagination
  pageSize: number = 8;
  startIndex:number = 0;
  endIndex: number = 8;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private api: APIService, private cdr: ChangeDetectorRef, private dialog: MatDialog, private router: Router) {
  }

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
    this.puzzles.slice(this.startIndex, this.endIndex);
    return event;
  }


  //sorting functions start here
  puzzleDescending()
  {
    return this.puzzles.sort( (a,b) => {
      let paramA = a.name.toLowerCase();
      let paramB = b.name.toLowerCase();

      if(paramA > paramB ){ return -1; }
      else { return 1; }
      return 0;
    });
  }

  puzzleAscending()
  {
    return this.puzzles.sort( (a,b) => {
      let paramA = a.name.toLowerCase();
      let paramB = b.name.toLowerCase();

      if(paramA < paramB ){ return -1; }
      else { return 1; }
      return 0;
    });
  }

  creatorDescending()
  {
    return this.puzzles.sort( (a,b) => {
      let paramA = a.creator.toLowerCase();
      let paramB = b.creator.toLowerCase();

      if(paramA > paramB ){ return -1; }
      else { return 1; }
      return 0;
    });
  }

  creatorAscending()
  {
    return this.puzzles.sort( (a,b) => {
      let paramA = a.creator.toLowerCase();
      let paramB = b.creator.toLowerCase();

      if(paramA < paramB ){ return -1; }
      else { return 1; }
      return 0;
    });
  }

  dateDescending()
  {
    return this.puzzles.sort( (a,b) => {
      let paramA = a.created;//.toLowerCase();
      let paramB = b.creator;//.toLowerCase();

      if(paramA > paramB ){ return -1; }
      else { return 1; }
      return 0;
    });
  }

  dateAscending()
  {
    return this.puzzles.sort( (a,b) => {
      let paramA = a.created;//.toLowerCase();
      let paramB = b.creator;//.toLowerCase();

      if(paramA < paramB ){ return -1; }
      else { return 1; }
      return 0;
    });
  }

  ratingDescending()
  {
    return this.puzzles.sort( (a,b) => {
      let paramA = a.rating;
      let paramB = b.rating;

      if(paramA > paramB ){ return -1; }
      else { return 1; }
      return 0;
    });
  }

  ratingAscending()
  {
    return this.puzzles.sort( (a,b) => {
      let paramA = a.rating;
      let paramB = b.rating;

      if(paramA < paramB ){ return -1; }
      else { return 1; }
      return 0;
    });
  }
  //sorting functions end here

  populate(populatePuz: any)
  {
    this.ratings.length = 0;
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
          this.totalNumberOfPuzzles = Object.keys(data).length;
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
          alert("Nothing matches given criteria");
          console.log("Nothing matches given criteria");
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
      puzzleObj.image = data[i].image;
      if (puzzleObj.creator== this.currentUser["name"])
      {
        puzzleObj.showRating = false;
      }
      else
      {
        puzzleObj.showRating = true;
      }

      let j = 0;
      let total = 0;

      for (let k=0; this.ratings[k]!=null; k++){
        if (this.ratings[k].puzzleID == data[i].id)
        {
          //********* ERROR HERE - THIS LOOP IS NOT ENTERED WHEN THE RATINGS VALUE IS 0  ************
          total = total + this.ratings[k].rating;
          j = j+1;
        }
      }

      if (j == 0){
        puzzleObj.rating = (0).toString();
      }
      else{
        puzzleObj.rating = (total/j).toFixed(2);
      }
      this.puzzles.push(puzzleObj);
    }

    this.datasource = new MatTableDataSource(this.puzzles);

    this.dataAvailable = true;
    this.show= false;

  }

  applyFilter(filterValue: string) {
    this.datasource.filterPredicate = function(data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter)
    };
    this.datasource.filter = filterValue.trim().toLowerCase();
    this.totalNumberOfPuzzles = this.datasource.filteredData.length;
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

  reload(){
    this.populate(null);
  }

  ngOnInit(): void {
    this.show=true;
    this.dataAvailable = false;
    if(!localStorage.getItem('token')){
      this.router.navigate(['/index']);
      alert("You are not logged in");
    }

    this.currentUser = {
      "token": localStorage.getItem('token')
    }

    this.api.getUser(this.currentUser).subscribe( data => {
      console.log(data["name"]);
      this.currentUser = {
        "token": localStorage.getItem('token'),
        "name": data["name"]
      }
    });

    this.populate(null);

  }
}
