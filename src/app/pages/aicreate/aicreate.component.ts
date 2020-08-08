import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aicreate',
  templateUrl: './aicreate.component.html',
  styleUrls: ['./aicreate.component.css']
})
export class AICreateComponent implements OnInit {

  
  token: any;

  constructor() { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
  }

}
