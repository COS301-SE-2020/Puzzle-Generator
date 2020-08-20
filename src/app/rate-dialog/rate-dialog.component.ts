import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rate-dialog',
  templateUrl: './rate-dialog.component.html',
  styleUrls: ['./rate-dialog.component.css']
})
export class RateDialogComponent implements OnInit {

  form: FormGroup;
  input: any;

  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<RateDialogComponent>) { }

    @Input() OnlyNumber: boolean;

    error_messages = {
      'rating': [
        { type: 'pattern', message: 'Must be a number between 1 and 5' }
      ]
    }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      rating: ['', Validators.pattern("^([1-5])$")]
    })
  }

  submit(form){
    this.input = form.rating;
      this.dialogRef.close(`${form.rating}`);
  }

}
