import { Component, OnInit } from '@angular/core';
import { Registration } from '../Model/Registration';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetuser',
  templateUrl: './resetuser.component.html',
  styleUrls: ['./resetuser.component.css']
})
export class ResetuserComponent implements OnInit {

  registration: Registration;
  constructor(private router: Router, private regService: RegisterService) {
    this.registration = new Registration()
  }

  ngOnInit() {
  }
  phone
  pwd
  updateUserPassword(login) {
    this.phone = (<HTMLInputElement>document.getElementById('phoneNo')).value;
    this.pwd = (<HTMLInputElement>document.getElementById('password')).value;
    this.regService.updateUserPassword(this.phone, this.pwd).subscribe((data: boolean) => {
      this.router.navigate(['/homepage'])
      alert(JSON.stringify("Password Sucessfully changed"))
    });
    this.registration = new Registration();
  }
}
