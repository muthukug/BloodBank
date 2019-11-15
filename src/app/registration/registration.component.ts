import { Component, OnInit } from '@angular/core';
import { Registration } from '../Model/Registration';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router, private regService: RegisterService) { }


  password
  confirmpassword


  ngOnInit() {
    
  }

  registration: Registration = new Registration();

  onSubmit(register) {
    this.regService.register(this.registration).subscribe((data: boolean) => {
      if (data) {
        this.router.navigate(['/homepage'])
        alert(JSON.stringify("Registeration Sucessful"))
      }
      else {
        alert("Already Registered with this Mobile Number")
      }
    },
      error => console.log(error)
    );
    this.registration = new Registration();
  }
}
