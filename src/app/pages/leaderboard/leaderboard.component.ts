import { Component, OnInit, ViewChild } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, MatSortable} from '@angular/material/sort';
import { LeaderboardArr } from './LeaderboardArr';
import { LoginDialogComponent } from 'src/app/dialogs/login-dialog/login-dialog.component';
import {ChangeDetectorRef } from '@angular/core';
import { RatingsArr } from '../ratings/RatingsArr';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  displayedColumns: string[] = ['position','name', 'memberSince', 'xp', 'level', 'nrPuzzles', 'avgRating', 'solved'];
  userList: Array<LeaderboardArr> = [];
  dataSource: any;
  i: number;
  j: number;
  l: number;
  x: number;
  currentUser: any;
  token: any;
  loginDialog: MatDialogRef<LoginDialogComponent>;
  countPuzzles: number =0;
  ratings: Array<RatingsArr> = [];



  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private api: APIService, private router: Router, private dialog: MatDialog, private cdref: ChangeDetectorRef) {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  populateTable(){

    this.ratings.length = 0;
    this.api.getAllPuzzleRatings().subscribe(
      data3=> {
        for(let j=0; data3[j]!= null; j++){
          let ratingObj = new RatingsArr();
          ratingObj.id = data3[j].id;
          ratingObj.rating = data3[j].rating;
          ratingObj.puzzleID = data3[j].puzzleID;
          this.ratings.push(ratingObj);
        }
      },
      error => {
        console.log("Error from API: ", error.error);
      });



    this.api.getAllUsers().subscribe( data => {
      this.i = 0;
      while(data[this.i]!=null){
        let leaderboardObj = new LeaderboardArr();
        leaderboardObj.name = data[this.i].name;
        leaderboardObj.memberSince = data[this.i].createdAt;
        leaderboardObj.xp = data[this.i].xp;
        leaderboardObj.level = data[this.i].level;
        if (leaderboardObj.xp == null){
          leaderboardObj.xp = 0;
        }
        if (leaderboardObj.level == null){
          leaderboardObj.level = 0;
        }

        this.currentUser = {
          "token": data[this.i].token
        }

        this.api.getPuzzlesByUser(this.currentUser).subscribe( data2 => {
          leaderboardObj.nrPuzzles = Object.keys(data2).length;
          this.l = 0;

          if (leaderboardObj.nrPuzzles == 0){
            leaderboardObj.avgRating = 0;
          }
          else {

          while (data2[this.l] != null){


              this.x = 0;
              this.countPuzzles = 0;
              for (let k=0; this.ratings[k]!=null; k++){
                if (this.ratings[k].puzzleID == data2[this.l].id)
                {
                  if (this.ratings[k].rating != 0){
                    this.countPuzzles = this.countPuzzles + this.ratings[k].rating;
                    this.x = this.x + 1;
                  }
                }
              if (this.countPuzzles != 0)
                leaderboardObj.avgRating = this.countPuzzles/this.x;
              else
                leaderboardObj.avgRating = 0;
            }

            this.l = this.l + 1;
          }
        }

      });

      this.api.retrieveAllSolveAttempts(this.currentUser).subscribe( data4 => {
        leaderboardObj.solved = Object.keys(data4).length;
      });

        this.i = this.i + 1;

        this.userList.push(leaderboardObj);
      }
      this.dataSource = new MatTableDataSource(this.userList);
      this.dataSource.paginator = this.paginator;
      this.sort.sort(({ id: 'xp', start: 'desc'}) as MatSortable);
      this.dataSource.sort = this.sort;
    });

  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();

    if(!localStorage.getItem('token')){
      this.router.navigate(['/index']);
      this.loginDialog = this.dialog.open(LoginDialogComponent, { disableClose: true, hasBackdrop: true });
      // alert("You are not logged in");
    }

    this.token = localStorage.getItem('token');

    this.populateTable();

  }

}
