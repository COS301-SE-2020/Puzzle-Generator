import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { APIService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-solved-puzzles',
  templateUrl: './profile-solved-puzzles.component.html',
  styleUrls: ['./profile-solved-puzzles.component.css']
})
export class ProfileSolvedPuzzlesComponent implements OnInit {
  currentUser: any;
  //user  puzzle variables
  //puzzleList: Observable <Puzzle[]> ;
  userPuzzleList: any;
  puzzle: any;
  show: boolean;
  text: boolean;
  imageList: any;
  temp: boolean = false;

  totalNumberOfPuzzles: number;
  ratingsLSize: number;

  //pagination
  pageSize: number = 6;
  startIndex:number = 0;
  endIndex: number = 6;

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private api: APIService, private router: Router) { }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    // this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  changeEvent(event: PageEvent)
  {
    console.log("Event: ", event);
    this.startIndex = event.pageIndex * event.pageSize;
    this.endIndex = this.startIndex + this.pageSize;
    if(this.endIndex > this.totalNumberOfPuzzles){
      this.endIndex = this.totalNumberOfPuzzles
    }
    this.userPuzzleList.slice(this.startIndex, this.endIndex);
    return event;
  }

  nameDescending()
  {
    return this.userPuzzleList.sort( (a,b) => {
      console.log("values: ", this.userPuzzleList);
      //console.log("args: ", args);
      let paramA = a.name.toLowerCase();
      let paramB = b.name.toLowerCase();

      if(paramA > paramB ){ return -1; }
      else { return 1; }
      return 0;
    });
  }

  nameAscending()
  {
    return this.userPuzzleList.sort( (a,b) => {
      console.log("values: ", this.userPuzzleList);
      //console.log("args: ", args);
      let paramA = a.name.toLowerCase();
      let paramB = b.name.toLowerCase();

      if(paramA < paramB ){ return -1; }
      else { return 1; }
      return 0;
    });
  }

  getUserPuzzles(){
    this.api.retrieveAllSolveAttempts(this.currentUser).subscribe( data => {
      this.totalNumberOfPuzzles = Object.keys(data).length;
      this.userPuzzleList = data;
      if (data[0]==null)
      {
        this.text = true;
      }
      this.show = false;
    });
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

    this.getUserPuzzles();
  }

}
