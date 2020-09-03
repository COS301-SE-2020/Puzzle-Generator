import { Component, OnInit } from '@angular/core';
import { initializeData } from 'src/assets/js/manualCreation.js';
import Konva from 'konva';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  token: any;

  name: any;
  description: any;

  constructor(private router: Router) { }

  ngOnInit(): void {

    if(!localStorage.getItem('token')){
      this.router.navigate(['/index']);
      alert("You are not logged in");
    }

    initializeData();
    this.token = localStorage.getItem('token');
  }

}
