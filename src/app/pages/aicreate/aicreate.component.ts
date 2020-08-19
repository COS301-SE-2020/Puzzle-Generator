import { Component, OnInit } from '@angular/core';
import { initializeDataAI } from 'src/assets/js/aiCreation.js';

@Component({
  selector: 'app-aicreate',
  templateUrl: './aicreate.component.html',
  styleUrls: ['./aicreate.component.css']
})
export class AICreateComponent implements OnInit {

  token: any;

  name: any;
  description: any;

  constructor() { }

  ngOnInit(): void {
  	initializeDataAI();
    this.token = localStorage.getItem('token');
  }

}
