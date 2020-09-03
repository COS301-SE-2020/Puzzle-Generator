import { Component, OnInit} from '@angular/core';
//import { getName } from '.././pages/login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  name:string;
  admin:boolean;
  token: any;

  constructor(private router: Router) { }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/index']);
  }

  ngOnInit(): void {
    this.name = localStorage.getItem('name');
    this.token = localStorage.getItem('token');
    if (this.token == "CgOOiUKmqqPyOlhFjDZth"){
      this.admin = true; 
    }

  }


}
