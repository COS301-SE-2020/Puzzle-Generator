import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { initializeDataSolve } from 'src/assets/js/solvePuzzle.js';

@Component({
  selector: 'app-solve-dialog',
  templateUrl: './solve-dialog.component.html',
  styleUrls: ['./solve-dialog.component.css']
})
export class SolveDialogComponent implements OnInit {

  token: any;

  constructor(private api: APIService, private router: Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem('token')){
      this.router.navigate(['/index']);
      alert("You are not logged in");
    }

    this.token =  localStorage.getItem('token');
    initializeDataSolve();
  }

}
