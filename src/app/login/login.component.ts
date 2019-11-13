import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../Model/login';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private regService: RegisterService) {
    this.login = new Login();
  }
  login: Login;


  username = ''
  password = ''

  uName;
  pwd;
  ngOnInit() {
  }

  checkLogin(login) {
    this.uName = (<HTMLInputElement>document.getElementById('username')).value;
    this.pwd = (<HTMLInputElement>document.getElementById('password')).value;
    localStorage.setItem("type", "user")

    this.regService.login(this.uName, this.pwd).subscribe((data: boolean) => {
      if (data) {
        sessionStorage.setItem('username', this.uName)
        alert("Login Sucessful")
        this.router.navigate(['/firstpage']);
      }
      else
        alert("Invalid Credentials")
    },
      error => console.log(error)
    );

  }

  register() {
    this.router.navigate(['/register']);
  }
}
