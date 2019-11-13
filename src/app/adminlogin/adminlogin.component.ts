import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../Model/login';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private router: Router, private regService: RegisterService) { }

  ngOnInit() {
    this.login = new Login();
  }

  login: Login;


  username = ''
  password = ''

  uName;
  pwd;

  checkLogin(login) {
    this.uName = (<HTMLInputElement>document.getElementById('username')).value;
    this.pwd = (<HTMLInputElement>document.getElementById('password')).value;
    localStorage.setItem("type", "admin")
    this.regService.adminlogin(this.uName, this.pwd).subscribe((data: boolean) => {
      if (data) {
        sessionStorage.setItem('adminname', this.uName)
        alert("Login Sucessful")
        this.router.navigate(['/mainadmin']);
      }
      else
        alert("Invalid Credentials")
    },
      error => console.log(error)
    );

  }

  register() {
    this.router.navigate(['/adminreg']);
  }

}
