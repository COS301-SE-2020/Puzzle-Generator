import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rate-dialog',
  templateUrl: './rate-dialog.component.html',
  styleUrls: ['./rate-dialog.component.css']
})
export class RateDialogComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<RateDialogComponent>) { }

    error_messages = {
      'rating': [
        { type: 'pattern', message: 'Number must be between 1 and 5' }
      ]
    }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      rating: ['', Validators.pattern("^([1-5])$")]
    })
  }

  submit(form){
    this.dialogRef.close(`${form.rating}`);
  }

}
