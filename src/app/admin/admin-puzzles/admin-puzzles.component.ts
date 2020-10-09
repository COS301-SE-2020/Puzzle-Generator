import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import {MatTableDataSource} from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { PuzzleArr } from '../../pages/ratings/puzzleArr';
import { RatingsArr } from '../../pages/ratings/RatingsArr';

@Component({
  selector: 'app-admin-puzzles',
  templateUrl: './admin-puzzles.component.html',
  styleUrls: ['./admin-puzzles.component.css']
})
export class AdminPuzzlesComponent implements OnInit {

  ratings: Array<RatingsArr> = [];
  puzzles: Array<PuzzleArr> = [];
  ratingEntry: any;
  datasource: any;
  show: boolean;
  dataAvailable: boolean ;

  totalNumberOfPuzzles: number;
  ratingsLSize: number;

  //pagination
  pageSize: number = 6;
  startIndex:number = 0;
  endIndex: number = 6;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;
  sortedBy: any;

  constructor(private api: APIService, private router: Router) { }

  changeEvent(event: PageEvent)
  {
    this.startIndex = event.pageIndex * event.pageSize;
    this.endIndex = this.startIndex + this.pageSize;
    if(this.endIndex > this.totalNumberOfPuzzles){
      this.endIndex = this.totalNumberOfPuzzles
    }
    this.puzzles.slice(this.startIndex, this.endIndex);
    return event;
  }

  applyFilter(filterValue: string) {
    this.datasource.filterPredicate = function(data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter) || data.creator.toLowerCase().includes(filter)
    };
    this.datasource.filter = filterValue.trim().toLowerCase();
    this.totalNumberOfPuzzles = this.datasource.filteredData.length;
  }

  puzzleDescending()
  {
    return this.puzzles.sort( (a,b) => {
      this.sortedBy = "puzzleDesc";
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
      this.sortedBy = "puzzleAsc";
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
      this.sortedBy = "creatorDesc";
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
      this.sortedBy = "creatorAsc";
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
      this.sortedBy = "dateDesc";
      let paramA = new Date(a.created).getTime();
      let paramB = new Date(b.created).getTime();
      return paramA > paramB ? 1 : -1;
    });
  }

  dateAscending()
  {
    return this.puzzles.sort( (a,b) => {
      this.sortedBy = "dateAsc";
      let paramA = new Date(a.created).getTime();
      let paramB = new Date(b.created).getTime();
      return paramA < paramB ? 1 : -1;
    });
  }

  ratingDescending()
  {
    return this.puzzles.sort( (a,b) => {
      this.sortedBy = "ratingDesc";
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
      this.sortedBy = "ratingAsc";
      let paramA = a.rating;
      let paramB = b.rating;

      if(paramA < paramB ){ return -1; }
      else { return 1; }
      return 0;
    });
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
      puzzleObj.shared = data[i].shared;

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
        puzzleObj.rating = 0;
      }
      else{
        puzzleObj.rating = (total/j);
      }
      this.puzzles.push(puzzleObj);
    }
    this.puzzleAscending();

    this.datasource = new MatTableDataSource(this.puzzles);

    this.dataAvailable = true;
    this.show= false;

  }

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
      this.api.getAllPuzzlesAdmin().subscribe(
        data => {
          this.totalNumberOfPuzzles = Object.keys(data).length;
          this.getPuzzles(data);
      },
        error => {//if status code other than in the 200 range returned, show error
          console.log('Error from API: ', error.error);
        })
    }

  }

  delete(puzzleID){
      if(this.api.deletePuzzleAdmin(puzzleID).subscribe()){
        alert("Puzzle deleted");
        location.reload();
      }
  }

  ngOnInit(): void {
    if(!localStorage.getItem('token')){
      this.router.navigate(['/index']);
      alert("You are not logged in");
    }
    this.show = true;
    this.dataAvailable = false;
    this.sortedBy = "";
    this.populate(null);
  }

}
