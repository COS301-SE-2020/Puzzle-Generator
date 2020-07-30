import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reset-success',
  templateUrl: './reset-success.component.html',
  styleUrls: ['./reset-success.component.css']
})
export class ResetSuccessComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router ) {}

  ngOnInit() {

    let message = this.route.snapshot.paramMap.get('message');
  }

}
