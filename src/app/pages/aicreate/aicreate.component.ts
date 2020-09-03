import { Component, OnInit } from '@angular/core';
import { initializeDataAI } from 'src/assets/js/aiCreation.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aicreate',
  templateUrl: './aicreate.component.html',
  styleUrls: ['./aicreate.component.css']
})
export class AICreateComponent implements OnInit {

  token: any;

  name: any;
  description: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem('token')){
      this.router.navigate(['/index']);
      alert("You are not logged in");
    }
  	initializeDataAI();
    this.token = localStorage.getItem('token');
  }

}
