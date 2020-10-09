import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import {MatTableDataSource} from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { PuzzleArr } from '../../pages/ratings/puzzleArr';
import { RatingsArr } from '../../pages/ratings/RatingsArr';

@Component({
  selector: 'app-admin-ratings',
  templateUrl: './admin-ratings.component.html',
  styleUrls: ['./admin-ratings.component.css']
})
export class AdminRatingsComponent implements OnInit {

  ratingList: any;
  totalNumberOfPuzzles: number;
  ratingsLSize: number;

  //pagination
  pageSize: number = 6;
  startIndex:number = 0;
  endIndex: number = 6;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;
  show: boolean;

  datasource: any;
  sortedBy: any = true;

  constructor(private api: APIService, private router: Router) { }

  getPuzzleRatings() {
    this.api.getAllRatingsAdmin().subscribe( data => {
      this.ratingList = data;
      this.totalNumberOfPuzzles = Object.keys(data).length;
      console.log(this.ratingList);
      this.show = false ;
      this.datasource = new MatTableDataSource(this.ratingList);
      this.puzzleAscending();
    }
    )
  }

  applyFilter(filterValue: string) {
    this.datasource.filterPredicate = function(data, filter: string): boolean {
      return data.testPuzzle.name.toLowerCase().includes(filter) || data.testUser.name.toLowerCase().includes(filter)
    };
    this.datasource.filter = filterValue.trim().toLowerCase();
    this.totalNumberOfPuzzles = this.datasource.filteredData.length;
  }

  changeEvent(event: PageEvent)
  {
    console.log("Event: ", event);
    this.startIndex = event.pageIndex * event.pageSize;
    this.endIndex = this.startIndex + this.pageSize;
    if(this.endIndex > this.totalNumberOfPuzzles){
      this.endIndex = this.totalNumberOfPuzzles
    }
    this.ratingList.slice(this.startIndex, this.endIndex);
    return event;
  }

  puzzleDescending()
  {
    return this.ratingList.sort( (a,b) => {
      this.sortedBy = "puzzleDesc";
      let paramA = a.testPuzzle.name.toLowerCase();
      let paramB = b.testPuzzle.name.toLowerCase();

      if(paramA > paramB ){ return -1; }
      else { return 1; }
      return 0;
    });
  }

  puzzleAscending()
  {
    return this.ratingList.sort( (a,b) => {
      this.sortedBy = "puzzleAsc";
      let paramA = a.testPuzzle.name.toLowerCase();
      let paramB = b.testPuzzle.name.toLowerCase();

      if(paramA < paramB ){ return -1; }
      else { return 1; }
      return 0;
    });
  }

  creatorDescending()
  {
    return this.ratingList.sort( (a,b) => {
      this.sortedBy = "creatorDesc";
      let paramA = a.testUser.name.toLowerCase();
      let paramB = b.testUser.name.toLowerCase();

      if(paramA > paramB ){ return -1; }
      else { return 1; }
      return 0;
    });
  }

  creatorAscending()
  {
    return this.ratingList.sort( (a,b) => {
      this.sortedBy = "creatorAsc";
      let paramA = a.testUser.name.toLowerCase();
      let paramB = b.testUser.name.toLowerCase();

      if(paramA < paramB ){ return -1; }
      else { return 1; }
      return 0;
    });
  }

  ratingDescending()
  {
    return this.ratingList.sort( (a,b) => {
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
    return this.ratingList.sort( (a,b) => {
      this.sortedBy = "ratingAsc";
      let paramA = a.rating;
      let paramB = b.rating;

      if(paramA < paramB ){ return -1; }
      else { return 1; }
      return 0;
    });
  }

  delete(rateID){
    if(this.api.deleteRatingAdmin(rateID).subscribe()){
      alert("Rating deleted");
      location.reload();
    }
  }


  ngOnInit(): void {
    if(!localStorage.getItem('token')){
      this.router.navigate(['/index']);
      alert("You are not logged in");
    }

    this.getPuzzleRatings();
    this.show = true;
  }

}
