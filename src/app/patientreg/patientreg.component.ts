import { Component, OnInit } from '@angular/core';
import { Patient } from '../Model/patient';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-patientreg',
  templateUrl: './patientreg.component.html',
  styleUrls: ['./patientreg.component.css']
})
export class PatientregComponent implements OnInit {

  constructor(private router: Router, private regService: RegisterService) { }

  ngOnInit() {
  }

  password
  confirmpassword

  patient: Patient = new Patient();

  onSubmit(register) {
    this.regService.patientreg(this.patient).subscribe((data: boolean) => {
      this.router.navigate(['/patientlist'])
      alert(JSON.stringify("Registeration Sucessful"))
    });
    this.patient = new Patient();
  }
}