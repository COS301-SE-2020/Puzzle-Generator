import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-email-pass',
  templateUrl: './email-pass.component.html',
  styleUrls: ['./email-pass.component.css']
})
export class EmailPassComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EmailPassComponent>) { }

  error_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'email', message: 'Invalid email format.' }
    ]
  }
  form: FormGroup;
  input: any;

  submit(form){
    this.input = form.email;
      this.dialogRef.close(`${form.email}`);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]]
    })
  }

}
