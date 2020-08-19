import { Component, OnInit } from '@angular/core';
import { initializeData } from 'src/assets/js/manualCreation.js';
import Konva from 'konva';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  token: any;

  name: any;
  description: any;

  constructor() { }

  ngOnInit(): void {
    initializeData();
    this.token = localStorage.getItem('token');
  }

}
