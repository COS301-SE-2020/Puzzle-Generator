import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';
import { Puzzle } from '../../models/Puzzle';
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
  //puzzleList: Observable <Puzzle[]> ;
  userPuzzleList: any;
  puzzle: any;
  show: boolean;
  text: boolean;
  imageList: any;
  temp: boolean = false;
  tee: any;

  constructor(private api: APIService, private router: Router) { }

  getUserPuzzles(){
    this.api.getPuzzlesByUser(this.currentUser).subscribe( data => {
      this.userPuzzleList = data;
      if (data[0]==null)
      {
        this.text = true;
      }

      //let puzzleImage = data[0].image.toDataURL();

    this.temp = true;
    this.getBase64ImageFromUrl(data[0].image)
    .then(result => this.tee = result)
    .catch(err => console.error(err));
      this.show = false;
    });
  }

  async getBase64ImageFromUrl(imageUrl) {
    var res = await fetch(imageUrl);
    var blob = await res.blob();

    return new Promise((resolve, reject) => {
      var reader  = new FileReader();
      reader.addEventListener("load", function () {
          resolve( reader.result);
      }, false);

      reader.onerror = () => {
        return reject(this);
      };
      reader.readAsDataURL(blob);
    })
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
    this.text = false;

    this.getUserPuzzles();
  }

}
