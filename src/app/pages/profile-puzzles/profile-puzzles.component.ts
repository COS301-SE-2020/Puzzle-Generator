import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { Puzzle } from 'src/app/models/Puzzle';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-puzzles',
  templateUrl: './profile-puzzles.component.html',
  styleUrls: ['./profile-puzzles.component.css']
})
export class ProfilePuzzlesComponent implements OnInit {

  currentUser: any;
  //user  puzzle variables
  puzzleList: Observable <Puzzle[]> ;
  puzzle: any;
  show: boolean;
  text: boolean;

  constructor(private api: APIService, private router: Router) { }

  getUserPuzzles(){
    this.puzzleList = this.api.getPuzzlesByUser(this.currentUser);
    this.puzzleList.subscribe(data => {
      if(data[0] == null)
      {
        this.text = true;
      }

    });
    this.show = false;
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

  stopShare(data: any){
    this.puzzle = {
      "puzzleID": data
    }
    if(this.api.stopSharingPuzzle(this.puzzle).subscribe()){
        alert("Stop sharing puzzle");
    }
    location.reload();
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
    this.puzzleList = null ;
    this.text = false; 

    this.getUserPuzzles();
  }

}
