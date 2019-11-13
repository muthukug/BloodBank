import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Observable } from 'rxjs';
import { Patient } from '../Model/patient';
import { DoanrDetails } from '../Model/donarDetails';
import { Router } from '@angular/router';
import { Donar } from '../Model/donar';

@Component({
  selector: 'app-assigndonar',
  templateUrl: './assigndonar.component.html',
  styleUrls: ['./assigndonar.component.css']
})
export class AssigndonarComponent implements OnInit {
  donarId;

  constructor(private regService: RegisterService, private router: Router) { }

  namedetails: any
  namedetail: any
  names: Observable<any>
  patName: Observable<any>
  patdetails: Patient[] = []
  donardetails: DoanrDetails = new DoanrDetails();
  donars: Donar;


  ngOnInit() {
    this.getDonarList();
    this.findByUserLocation();
  }

  getDonarList() {
    this.donars = this.regService.getSetDonarList();
  }
  findByUserLocation() {
    let lat = this.donars.location;
    this.regService.findByUserLocation(lat).subscribe(data => {
      this.namedetails = data;
    });

  }



  findByName(name) {
    this.regService.findByName(name).subscribe(data => {
      this.namedetail = data;
    });

  }



  onSubmit(assign) {
    this.donardetails.pId = this.donars.patientId;
    this.donardetails.pName = this.donars.name;
    this.donardetails.phNo = this.donars.phoneNo;
    this.donardetails.plocation = this.donars.location;
    this.donardetails.donarName = this.namedetails[0];
    this.donardetails.donarPhoneNo = this.namedetail[0];
    this.donardetails.donarBg = this.donars.bloodGroup;
    this.donardetails.status = "Requested";
    this.regService.SetDonarDetails(this.donardetails);
    this.regService.donarreg(this.donardetails).subscribe(data => this.donarId = data);
    alert("Donar is Assigned");
    this.router.navigate(['/mainadmin']);
  }

}