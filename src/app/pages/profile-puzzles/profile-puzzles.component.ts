import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { Puzzle } from 'src/app/models/Puzzle';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SolveDialogComponent } from 'src/app/dialogs/solve-dialog/solve-dialog.component';
import { LoginDialogComponent } from 'src/app/dialogs/login-dialog/login-dialog.component';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-profile-puzzles',
  templateUrl: './profile-puzzles.component.html',
  styleUrls: ['./profile-puzzles.component.css']
})
export class ProfilePuzzlesComponent implements OnInit {

  currentUser: any;
  //user  puzzle variables
  userPuzzleList: any;
  puzzle: any;
  show: boolean;
  text: boolean;
  imageList: any;
  temp: boolean = false;
  token: any;

  totalNumberOfPuzzles: number;
  ratingsLSize: number;

  //pagination
  pageSize: number = 6;
  startIndex:number = 0;
  endIndex: number = 6;

  // MatPaginator Output
  pageEvent: PageEvent;

  solveDialog: MatDialogRef<SolveDialogComponent>
  loginDialog: MatDialogRef<LoginDialogComponent>;

  datasource: any;
  sortedBy: any;

  constructor(private api: APIService, private router: Router, private dialog: MatDialog) { }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    // this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  applyFilter(filterValue: string) {
    this.datasource.filterPredicate = function(data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter)
    };
    this.datasource.filter = filterValue.trim().toLowerCase();
    this.totalNumberOfPuzzles = this.datasource.filteredData.length;
  }

  nameDescending()
  {
    return this.userPuzzleList.sort( (a,b) => {
      this.sortedBy = "puzzleDesc";
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
      this.sortedBy = "puzzleAsc";
      let paramA = a.name.toLowerCase();
      let paramB = b.name.toLowerCase();

      if(paramA < paramB ){ return -1; }
      else { return 1; }
      return 0;
    });
  }

  ratingDescending()
  {
    return this.userPuzzleList.sort( (a,b) => {
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
    return this.userPuzzleList.sort( (a,b) => {
      this.sortedBy = "ratingAsc";
      let paramA = a.rating;
      let paramB = b.rating;

      if(paramA < paramB ){ return -1; }
      else { return 1; }
      return 0;
    });
  }

  dateDescending()
  {
    return this.userPuzzleList.sort( (a,b) => {
      this.sortedBy = "dateDesc";
      let paramA = new Date(a.createdAt).getTime();
      let paramB = new Date(b.createdAt).getTime();
      return paramA > paramB ? 1 : -1;
    });
  }

  dateAscending()
  {
    return this.userPuzzleList.sort( (a,b) => {
      this.sortedBy = "dateAsc";
      let paramA = new Date(a.createdAt).getTime();
      let paramB = new Date(b.createdAt).getTime();
      return paramA < paramB ? 1 : -1;
    });
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


  getUserPuzzles(){
    this.userPuzzleList = "";
    this.api.getPuzzlesByUser(this.currentUser).subscribe( data => {
      this.totalNumberOfPuzzles = Object.keys(data).length;
      this.userPuzzleList = data;
      if (data[0]==null)
      {
        this.text = true;
      }
      this.show = false;
      this.datasource = new MatTableDataSource(this.userPuzzleList);
      this.nameAscending();
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

  openSolveDialog(puzzleID: any){
    localStorage.setItem('solvingPuzzleID', puzzleID);
    this.solveDialog = this.dialog.open(SolveDialogComponent, { disableClose: true, hasBackdrop: true });
  }

  ngOnInit(): void {

    if(!localStorage.getItem('token')){
      this.router.navigate(['/index']);
      this.loginDialog = this.dialog.open(LoginDialogComponent, { disableClose: true, hasBackdrop: true });
      // alert("You are not logged in");
    }

    this.currentUser = {
      "token": localStorage.getItem('token')
    }

    this.token = localStorage.getItem('token');

    this.show = true;
    this.text = false;

    this.delay(2000).then( () =>{
      this.getUserPuzzles();
    });

  }

}
