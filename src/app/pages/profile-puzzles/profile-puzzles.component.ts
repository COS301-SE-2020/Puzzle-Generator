import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { Puzzle } from 'src/app/models/Puzzle';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-profile-puzzles',
  templateUrl: './profile-puzzles.component.html',
  styleUrls: ['./profile-puzzles.component.css']
})
export class ProfilePuzzlesComponent implements OnInit {

  currentUser: any;
  //user  puzzle variables
  //puzzleList: Observable <Puzzle[]> ;
  userPuzzleList: any;
  puzzle: any;
  show: boolean;
  text: boolean;
  imageList: any;
  temp: boolean = false;
  tee: any;

  totalNumberOfPuzzles: number;
  ratingsLSize: number;

  //pagination
  pageSize: number = 4;
  startIndex:number = 0;
  endIndex: number = 4;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private api: APIService, private router: Router) { }

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
    this.api.getPuzzlesByUser(this.currentUser).subscribe( data => {
      this.totalNumberOfPuzzles = Object.keys(data).length;
      this.userPuzzleList = data;
      if (data[0]==null)
      {
        this.text = true;
      }
      this.show = false;
    });
  }

  share(data: any){
    this.puzzle = {
      "puzzleID": data
    }
    if(this.api.sharePuzzle(this.puzzle).subscribe()){
        alert("Puzzle shared");
    }
    location.reload();
  }

  deletePuzzle(puzzleID: any){
    // this.puzzle = {
    //   "puzzleID": puzzleID
    // }
    if(this.api.deletePuzzle(puzzleID).subscribe()){
        alert("Puzzle deleted");
    }
    location.reload();
  }

  stopShare(data: any){
    this.puzzle = {
      "puzzleID": data
    }
    if(this.api.stopSharingPuzzle(this.puzzle).subscribe()){
        alert("Stop sharing puzzle");
    }
    location.reload();
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms))
    .then( () => { console.log("fired"); });
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

    this.delay(2100).then( () =>{
      this.getUserPuzzles();
    });

    //this.getUserPuzzles();
  }

}
