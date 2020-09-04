import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import {MatTableDataSource} from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-admin-ratings',
  templateUrl: './admin-ratings.component.html',
  styleUrls: ['./admin-ratings.component.css']
})
export class AdminRatingsComponent implements OnInit {

  ratingsList: any;

  constructor(private api: APIService, private router: Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem('token')){
      this.router.navigate(['/index']);
      alert("You are not logged in");
    }
  }

}
