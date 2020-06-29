import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';   
import { User } from '../models/user';
import {HttpHeaders} from '@angular/common/http';    
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  //create new user
  createUser(newUser: User){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'} ) }; 
    return this.http.post('http://localhost:3200/api/users/createUser',newUser, httpOptions);
  }
  
  loginUser(currentUser: User){
    const httpOptions = { headers: new HttpHeaders( { 'Content-Type': 'application/json' })};
    return this.http.post('http://localhost:3200/api/users/login', currentUser, httpOptions);
  }
}
