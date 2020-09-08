import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {

  userList: any;
  show: boolean;
  totalNumberOfUsers: number;
  pageSize: number = 12;
  startIndex:number = 0;
  endIndex: number = 12;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  datasource: any;

  pageEvent: PageEvent;

  constructor(private api: APIService, private router: Router) { }


  changeEvent(event: PageEvent)
  {
    console.log("Event: ", event);
    this.startIndex = event.pageIndex * event.pageSize;
    this.endIndex = this.startIndex + this.pageSize;
    if(this.endIndex > this.totalNumberOfUsers){
      this.endIndex = this.totalNumberOfUsers
    }
    this.userList.slice(this.startIndex, this.endIndex);
    return event;
  }

  nameDescending()
  {
    return this.userList.sort( (a,b) => {
      let paramA = a.name.toLowerCase();
      let paramB = b.name.toLowerCase();

      if(paramA > paramB ){ return -1; }
      else { return 1; }
      return 0;
    });
  }

  nameAscending()
  {
    return this.userList.sort( (a,b) => {
      let paramA = a.name.toLowerCase();
      let paramB = b.name.toLowerCase();

      if(paramA < paramB ){ return -1; }
      else { return 1; }
      return 0;
    });
  }


  applyFilter(filterValue: string) {
    this.datasource.filterPredicate = function(data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter) 
    };
    this.datasource.filter = filterValue.trim().toLowerCase();
    this.totalNumberOfUsers = this.datasource.filteredData.length;
  }

  getUsers(){
    this.api.getAllUsers().subscribe( data => {
      this.totalNumberOfUsers = Object.keys(data).length;
      this.userList = data;
      this.show = false;
      this.datasource = new MatTableDataSource(this.userList);
    })
  }

  delete(user){
    if(this.api.deleteUser(user).subscribe()){
      alert("User deleted");
      location.reload();
    }
  }

  ngOnInit(): void {
    if(!localStorage.getItem('token')){
      this.router.navigate(['/index']);
      alert("You are not logged in");
    }

    this.getUsers();
    this.show = true;
  }

}
