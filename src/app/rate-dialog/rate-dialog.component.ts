import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-rate-dialog',
  templateUrl: './rate-dialog.component.html',
  styleUrls: ['./rate-dialog.component.css']
})
export class RateDialogComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<RateDialogComponent>) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      rating: 0
    })
  }

  submit(form){
    this.dialogRef.close(`${form.value.rating}`);
  }

}
