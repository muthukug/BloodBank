import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { Registration } from '../Model/Registration';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  registration: Registration;

  constructor(private router: Router, private regService: RegisterService) {
    this.registration = new Registration()
  }

  phone;
  pwd;

  ngOnInit() {
  }

  reset(login) {
    this.phone = (<HTMLInputElement>document.getElementById('phoneNo')).value;
    this.pwd = (<HTMLInputElement>document.getElementById('password')).value;
    this.regService.edit(this.phone, this.pwd).subscribe((data: boolean) => {
      this.router.navigate(['/adminlogin'])
      alert(JSON.stringify("Password Sucessfully changed"))
    });
    this.registration = new Registration();
  }

}
