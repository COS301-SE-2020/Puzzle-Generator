import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../models/User';
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

  getUser(token: any){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'} ) };
    return this.http.post('http://localhost:3200/api/users/getUser',token, httpOptions);
  }

  updateName(currentUser: User){
    const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' })};
    return this.http.put('http://localhost:3200/api/users/updateName', currentUser, httpOptions);
  }

  updateUsername(currentUser: User){
    const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' })};
    return this.http.put('http://localhost:3200/api/users/updateUsername', currentUser, httpOptions);
  }

  getPuzzlesByUser(token: any): Observable<any[]> {
    const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' })};
    return this.http.post<any[]>('http://localhost:3200/api/users/getPuzzlesByUser', token, httpOptions);
  }

  getPuzzleRatingsByUser(token: any): Observable<any[]>{
    const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' })};
    return this.http.post<any[]>('http://localhost:3200/api/users/getPuzzleRatingsByUser', token, httpOptions);
  }

  /**
   * User endpoints end here
   */


/**
* Puzzle endpoints start here
*/
getAllPuzzles(){
  return this.http.get('http://localhost:3200/api/puzzles/getAllPuzzles');
}

getAllPuzzleByID(puzzleID: number){
  return this.http.get('http://localhost:3200/api/puzzles/getPuzzleByID?Id=' + puzzleID);
}

createNewPuzzle(puzzle: Puzzle){
  const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' })};
  return this.http.post('http://localhost:3200/api/puzzles/createPuzzle', puzzle, httpOptions);
}

createNewPuzzleRating(rating: PuzzleRating){
  const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' })};
  return this.http.post('http://localhost:3200/api/puzzles/createPuzzleRating', rating, httpOptions);
}

getAllPuzzleRatings(){
  return this.http.get('http://localhost:3200/api/puzzles/getAllPuzzleRatings');
}

getSearchedPuzzles(term: any){
  return this.http.get('http://localhost:3200/api/puzzles/getSearchedPuzzles/' + term);
}

sharePuzzle(puzzle: any){
  const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' })};
  return this.http.put('http://localhost:3200/api/puzzles/sharePuzzle', puzzle, httpOptions);
}

stopSharingPuzzle(puzzle: any){
  const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' })};
  return this.http.put('http://localhost:3200/api/puzzles/stopSharingPuzzle', puzzle, httpOptions);
}

deletePuzzle(puzzle:number):Observable<number>
{
  return this.http.delete<number>('http://localhost:3200/api/puzzles/deletePuzzle/'+puzzle);
}

/**
* Puzzle endpoints end here
*/
}
