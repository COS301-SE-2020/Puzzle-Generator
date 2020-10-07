import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { LeaderboardArr } from './LeaderboardArr';
import { LoginDialogComponent } from 'src/app/dialogs/login-dialog/login-dialog.component';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  displayedColumns: string[] = ['name', 'memberSince', 'nrPuzzles'];
  dataSource: any = "";
  userList: Array<LeaderboardArr> = [];
  i: number;
  currentUser: any;
  token: any;
  loginDialog: MatDialogRef<LoginDialogComponent>; 


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private api: APIService, private router: Router, private dialog: MatDialog) {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  populateTable(){
    this.api.getAllUsers().subscribe( data => {
      this.i = 0;
      while(data[this.i]!=null){
        let leaderboardObj = new LeaderboardArr();
        leaderboardObj.name = data[this.i].name;
        leaderboardObj.memberSince = data[this.i].createdAt;

        this.currentUser = {
          "token": data[this.i].token
        }

        this.api.getPuzzlesByUser(this.currentUser).subscribe( data => {
          leaderboardObj.nrPuzzles = Object.keys(data).length;
        })



        console.log(data[this.i]);

        this.i = this.i + 1;

        this.userList.push(leaderboardObj);
      }
      this.dataSource = new MatTableDataSource(this.userList);
    });

  }

  ngOnInit(): void {
    if(!localStorage.getItem('token')){
      this.router.navigate(['/index']);
      this.loginDialog = this.dialog.open(LoginDialogComponent, { disableClose: true, hasBackdrop: true });
      // alert("You are not logged in");
    }

    this.token = localStorage.getItem('token');

    this.populateTable();

  }

}
