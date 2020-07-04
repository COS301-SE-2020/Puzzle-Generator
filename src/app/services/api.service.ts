import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';   
import { User } from '../models/user';
import { Puzzle } from '../models/Puzzle';
import { PuzzleRating } from '../models/PuzzleRating';
import {HttpHeaders} from '@angular/common/http';    
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  /**
   * User endpoints start here
   */
  //create new user
  createUser(newUser: User){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'} ) }; 
    return this.http.post('http://localhost:3200/api/users/createUser',newUser, httpOptions);
  }
  
  loginUser(currentUser: User){
    const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' })};
    return this.http.post('http://localhost:3200/api/users/login', currentUser, httpOptions);
  }

  resetPassword(currentUser: User){
    const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' })};
    return this.http.put('http://localhost:3200/api/users/resetPassword', currentUser, httpOptions);
  }

  updateName(currentUser: User){
    const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' })};
    return this.http.put('http://localhost:3200/api/users/updateName', currentUser, httpOptions);
  }

  updateUsername(currentUser: User){
    const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' })};
    return this.http.put('http://localhost:3200/api/users/updateUsername', currentUser, httpOptions);
  }

  getPuzzlesByUser(token: any){
    const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' })};
    return this.http.post('http://localhost:3200/api/users/getPuzzlesByUser', token, httpOptions);
  }

  getPuzzleRatingssByUser(token: any){
    const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' })};
    return this.http.post('http://localhost:3200/api/users/getPuzzleRatingsByUser', token, httpOptions);
  }

  /**
   * User endpoints end here
   */


/**
* Puzzle endpoints start here
*/
getAllPuzzles(){
  return this.http.get('http://localhost:3200/api/users/getAllPuzzles');
}

getAllPuzzleByID(puzzleID: number){ 
  return this.http.get('http://localhost:3200/api/users/getPuzzleByID?Id=' + puzzleID);
}

createNewPuzzle(puzzle: Puzzle){
  const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' })};
  return this.http.post('http://localhost:3200/api/users/createPuzzle', puzzle, httpOptions);
}

createNewPuzzleRating(rating: PuzzleRating){
  const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' })};
  return this.http.post('http://localhost:3200/api/users/createPuzzleRating', rating, httpOptions);
}

getAllPuzzleRatings(){
  return this.http.get('http://localhost:3200/api/users/getAllPuzzleRatings');
}

/**
* Puzzle endpoints end here
*/
}
