import { Component, OnInit } from '@angular/core';
import { Puzzle } from 'src/app/models/Puzzle';
import { Observable } from 'rxjs';
import { APIService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-ratings',
  templateUrl: './profile-ratings.component.html',
  styleUrls: ['./profile-ratings.component.css']
})
export class ProfileRatingsComponent implements OnInit {

  currentUser: any;
  //user puzzle ratings variables
  ratingList: Observable <any[]> ;

  constructor(private api: APIService, private router: Router) { }

  getUserPuzzleRatings(){
    this.ratingList = this.api.getPuzzleRatingsByUser(this.currentUser);
  }

  ngOnInit(): void {

    if(!localStorage.getItem('token')){
      this.router.navigate(['/index']);
      alert("You are not logged in");
    }

    this.currentUser = {
      "token": localStorage.getItem('token')
    }

    this.getUserPuzzleRatings();
  }

}
