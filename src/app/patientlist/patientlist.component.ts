import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.css']
})
export class PatientListComponent implements OnInit {

  pat: Observable<any>;
  constructor(private regService: RegisterService) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.pat = this.regService.getAllPatient();
  }


  deletePatient(patientId) {
    if (confirm("Are you sure to delete ")) {
      console.log(this.regService.deletePatient(patientId).subscribe(),
        this.pat = this.regService.getAllPatient()
      );
    }


  }
}
