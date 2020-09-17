import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { APIService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SolveDialogComponent } from 'src/app/dialogs/solve-dialog/solve-dialog.component';
import { LoginDialogComponent } from 'src/app/dialogs/login-dialog/login-dialog.component';
import { downloadPuzzle2D, downloadPuzzle3D } from 'src/assets/js/downloadPuzzle.js';
import {MatTableDataSource} from '@angular/material/table';

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

  datasource: any = "";
  sortedBy: any;

  constructor(private api: APIService, private router: Router, private dialog: MatDialog) { }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    // this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  applyFilter(filterValue: string) {
    this.datasource.filterPredicate = function(data, filter: string): boolean {
      return data.puzzleName.toLowerCase().includes(filter)
    };
    this.datasource.filter = filterValue.trim().toLowerCase();
    this.totalNumberOfPuzzles = this.datasource.filteredData.length;
  }

  nameDescending()
  {
    return this.userPuzzleList.sort( (a,b) => {
      this.sortedBy = "puzzleDesc";
      let paramA = a.puzzleName.toLowerCase();
      let paramB = b.puzzleName.toLowerCase();

      if(paramA > paramB ){ return -1; }
      else { return 1; }
      return 0;
    });
  }

  nameAscending()
  {
    return this.userPuzzleList.sort( (a,b) => {
      this.sortedBy = "puzzleAsc";
      let paramA = a.puzzleName.toLowerCase();
      let paramB = b.puzzleName.toLowerCase();

      if(paramA < paramB ){ return -1; }
      else { return 1; }
      return 0;
    });
}

  dateDescending()
  {
    return this.userPuzzleList.sort( (a,b) => {
      this.sortedBy = "dateDesc";
      let paramA = new Date(a.dateCreated).getTime();
      let paramB = new Date(b.dateCreated).getTime();
      return paramA > paramB ? 1 : -1;
    });
  }

  dateAscending()
  {
    return this.userPuzzleList.sort( (a,b) => {
      this.sortedBy = "dateAsc";
      let paramA = new Date(a.dateCreated).getTime();
      let paramB = new Date(b.dateCreated).getTime();
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
    this.api.retrieveAllSolveAttempts(this.currentUser).subscribe( data => {
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

  openSolveDialog(puzzleID: any){
    localStorage.setItem('solvingPuzzleID', puzzleID);
    this.solveDialog = this.dialog.open(SolveDialogComponent, { disableClose: true, hasBackdrop: true });
  }

  twoDDownload(puzzleID: any){
    downloadPuzzle2D(puzzleID);
  }

  threeDDownload(puzzleID: any){
    downloadPuzzle3D(puzzleID);
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

    this.getUserPuzzles();
  }

}
