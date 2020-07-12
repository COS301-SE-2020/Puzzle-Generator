import { Component, OnInit } from '@angular/core';
import { Puzzle } from 'src/app/models/Puzzle';
import { Observable } from 'rxjs';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile-ratings',
  templateUrl: './profile-ratings.component.html',
  styleUrls: ['./profile-ratings.component.css']
})
export class ProfileRatingsComponent implements OnInit {

  currentUser: any;
  //user puzzle ratings variables
  ratingList: Observable <any[]> ;

  constructor(private api: APIService) { }

  getUserPuzzleRatings(){
    this.ratingList = this.api.getPuzzleRatingsByUser(this.currentUser);
  }

  ngOnInit(): void {
    this.currentUser = {
      "token": localStorage.getItem('token')
    }

    this.getUserPuzzleRatings();
  }

}
