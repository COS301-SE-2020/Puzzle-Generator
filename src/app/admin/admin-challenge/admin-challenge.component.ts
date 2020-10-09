import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-challenge',
  templateUrl: './admin-challenge.component.html',
  styleUrls: ['./admin-challenge.component.css']
})
export class AdminChallengeComponent implements OnInit {

  nameTextboxValue: string;
  challengeForm: FormGroup;

  constructor(private api: APIService, private formBuilder: FormBuilder, private router: Router, private dialog: MatDialog) { }

  createChallenge(){}

  error_messages = {
    'name': [
      { type: 'required', message: 'Name is required.' },
      { type: 'pattern', message: 'Name can only consist of letters' }
    ]
  }

  ngOnInit(): void {

    this.challengeForm = this.formBuilder.group({
      oneName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      twoName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      bonusName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      oneDif: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      twoDiff: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      bonusDiff: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    });
  }

}
