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
    return this.http.post('https://prometheuspuzzles.herokuapp.com/api/users/createUser',newUser, httpOptions);
  }

  loginUser(currentUser: User){
    const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' })};
    return this.http.post('https://prometheuspuzzles.herokuapp.com/api/users/login', currentUser, httpOptions);
  }

  resetPassword(currentUser: User){
    const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' })};
    return this.http.put('https://prometheuspuzzles.herokuapp.com/api/users/resetPassword', currentUser, httpOptions);
  }

  getUser(token: any){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'} ) };
    return this.http.post('https://prometheuspuzzles.herokuapp.com/api/users/getUser',token, httpOptions);
  }

  updateName(currentUser: User){
    const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' })};
    return this.http.put('https://prometheuspuzzles.herokuapp.com/api/users/updateName', currentUser, httpOptions);
  }

  updateUsername(currentUser: User){
    const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' })};
    return this.http.put('https://prometheuspuzzles.herokuapp.com/api/users/updateUsername', currentUser, httpOptions);
  }

  getPuzzlesByUser(token: any): Observable<any[]> {
    const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' })};
    return this.http.post<any[]>('https://prometheuspuzzles.herokuapp.com/api/users/getPuzzlesByUser', token, httpOptions);
  }

  getPuzzleRatingsByUser(token: any): Observable<any[]>{
    const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' })};
    return this.http.post<any[]>('https://prometheuspuzzles.herokuapp.com/api/users/getPuzzleRatingsByUser', token, httpOptions);
  }

  /**
   * User endpoints end here
   */


/**
* Puzzle endpoints start here
*/
getAllPuzzles(){
  return this.http.get('https://prometheuspuzzles.herokuapp.com/api/puzzles/getAllPuzzles');
}

getAllPuzzleByID(puzzleID: number){
  return this.http.get('https://prometheuspuzzles.herokuapp.com/api/puzzles/getPuzzleByID?Id=' + puzzleID);
}

createNewPuzzle(puzzle: Puzzle){
  const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' })};
  return this.http.post('https://prometheuspuzzles.herokuapp.com/api/puzzles/createPuzzle', puzzle, httpOptions);
}

createNewPuzzleRating(rating: PuzzleRating){
  const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' })};
  return this.http.post('https://prometheuspuzzles.herokuapp.com/api/puzzles/createPuzzleRating', rating, httpOptions);
}

getAllPuzzleRatings(){
  return this.http.get('https://prometheuspuzzles.herokuapp.com/api/puzzles/getAllPuzzleRatings');
}

getSearchedPuzzles(term: any){
  return this.http.get('https://prometheuspuzzles.herokuapp.com/api/puzzles/getSearchedPuzzles/' + term);
}

sharePuzzle(puzzle: any){
  const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' })};
  return this.http.put('https://prometheuspuzzles.herokuapp.com/api/puzzles/sharePuzzle', puzzle, httpOptions);
}

stopSharingPuzzle(puzzle: any){
  const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' })};
  return this.http.put('https://prometheuspuzzles.herokuapp.com/api/puzzles/stopSharingPuzzle', puzzle, httpOptions);
}

deletePuzzle(puzzle:number):Observable<number>
{
  return this.http.delete<number>('https://prometheuspuzzles.herokuapp.com/api/puzzles/deletePuzzle/'+puzzle);
}

findRatingID(rating: any){
  const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' })};
  return this.http.post('https://prometheuspuzzles.herokuapp.com/api/puzzles/findRatingID', rating, httpOptions);
}

deleteRating(rating:number):Observable<number>
{
  return this.http.delete<number>('https://prometheuspuzzles.herokuapp.com/api/puzzles/deleteRating/'+rating);
}

retrieveAllSolveAttempts(currentUser: any){
  const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' })};
  return this.http.post('https://prometheuspuzzles.herokuapp.com/api/users/getSolvedPuzzles', currentUser, httpOptions);
}

/**
* Puzzle endpoints end here
*/

/**
* Admin endpoints start here
*/

getAllUsers(){
  return this.http.get('https://prometheuspuzzles.herokuapp.com/api/admin/getAllUsers');
}

deleteUser(user:number): Observable<number>
{
  return this.http.delete<number>('https://prometheuspuzzles.herokuapp.com/api/admin/deleteUser/'+user);
}

getAllPuzzlesAdmin()
{
  return this.http.get('https://prometheuspuzzles.herokuapp.com/api/admin/getAllPuzzles');
}

deletePuzzleAdmin(puzzle:number): Observable<number>{
  return this.http.delete<number>('https://prometheuspuzzles.herokuapp.com/api/admin/deletePuzzle/'+puzzle);
}

getAllRatingsAdmin(){
  return this.http.get('https://prometheuspuzzles.herokuapp.com/api/admin/getAllRatings');
}

deleteRatingAdmin(rateID:number): Observable<number>{
  return this.http.delete<number>('https://prometheuspuzzles.herokuapp.com/api/admin/deleteRatingAdmin/'+rateID);
}
/**
* Admin endpoints end here
*/

}
