import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { APIService } from 'src/app/services/api.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { PuzzleArr } from './puzzleArr';
import { RatingsArr } from './RatingsArr';
import { getName } from '../login/login.component';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {

  puzzles: Array<PuzzleArr> = [];
  name: string;
  ratings: Array<RatingsArr> = [];

  constructor(private api: APIService) {

  }

  populate()
  {


    this.api.getAllPuzzleRatings().subscribe(
      data=> {
        for(let i=0; data[i]!= null; i++){
          let ratingObj = new RatingsArr();
          ratingObj.id = data[i].id;
          ratingObj.rating = data[i].rating;
          ratingObj.puzzleID = data[i].puzzleID;
          this.ratings.push(ratingObj);
        }
      },
      error => {
        console.log("Error from API: ", error.error);
      });

    this.api.getAllPuzzles().subscribe(
      data => {
        for(let i=0; data[i]!=null; i++)
        {
          let puzzleObj = new PuzzleArr();
          puzzleObj.id = data[i].id;
          puzzleObj.name = data[i].name;
          puzzleObj.description = data[i].description;
          puzzleObj.creator = data[i].creatorID;

          let j = 0;
          let total = 0;

          for (let k=0; this.ratings[k]!=null; k++){
            if (this.ratings[k].puzzleID == data[i].id)
            {
              total = total + this.ratings[k].rating;
              j = j+1;
            }
          }

          if (j == 0){
            puzzleObj.rating = 0;
          }
          else{
            puzzleObj.rating = total/j;
          }
          this.puzzles.push(puzzleObj);
          //console.log(this.puzzles[i]);
        }
          //this.puzzles.push(data);
    },
      error => {//if status code other than in the 200 range returned, show error
        console.log('Error from API: ', error.error);
      })

  }

  ngOnInit(): void {
    this.populate();
    this.name = getName();
    this.name = this.name; 
  }

}
