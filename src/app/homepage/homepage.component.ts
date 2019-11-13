import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { Login } from '../Model/login';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  login: Login;

  constructor(private router: Router, private regService: RegisterService) {
    this.login = new Login();
  }


  ngOnInit() {
  }

  User() {
    this.router.navigate(['/login']);
  }

  Admin() {
    this.router.navigate(['/adminlogin']);
  }
}
