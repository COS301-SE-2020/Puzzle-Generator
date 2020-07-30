import { Component, OnInit } from '@angular/core';
import { createModule } from 'src/assets/js/manualCreation.js';
import Konva from 'konva';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  token: any;

  constructor() { }

  ngOnInit(): void {
    createModule;
    this.token = localStorage.getItem('token')
  }

}
