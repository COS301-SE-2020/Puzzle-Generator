import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { Puzzle } from 'src/app/models/Puzzle';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-puzzles',
  templateUrl: './profile-puzzles.component.html',
  styleUrls: ['./profile-puzzles.component.css']
})
export class ProfilePuzzlesComponent implements OnInit {

  currentUser: any;
  //user  puzzle variables
  puzzleList: Observable <Puzzle[]> ;

  constructor(private api: APIService) { }

  getUserPuzzles(){
    this.puzzleList = this.api.getPuzzlesByUser(this.currentUser);
  }

  ngOnInit(): void {
    this.currentUser = {
      "token": localStorage.getItem('token')
    }

    this.getUserPuzzles();
  }

}
