import { Component, OnInit } from '@angular/core';
//import { getName } from '.././pages/login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  name:string;

  constructor() { }

  ngOnInit(): void {
    this.name = localStorage.getItem('name');
  }

}
