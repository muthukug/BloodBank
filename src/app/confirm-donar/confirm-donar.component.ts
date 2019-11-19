import { Component, OnInit } from '@angular/core';
import { Donar } from '../Model/donar';
import { DoanrDetails } from '../Model/donarDetails';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-donar',
  templateUrl: './confirm-donar.component.html',
  styleUrls: ['./confirm-donar.component.css']
})
export class ConfirmDonarComponent implements OnInit {

  donars: Donar;
  donardetails: DoanrDetails = new DoanrDetails();
  userId: String;
  userName: any;
  donarId: Object;
  user
  constructor(private regService: RegisterService, private router: Router) { }

  ngOnInit() {
    this.uName();
    this.getUserId();
    this.getDonarList();
    this.regService.getName().subscribe(data=>this.user=data);
  }
  getDonarList() {
    this.donars = this.regService.getSetDonarList();
  }
  getUserId() {
    this.userId = this.regService.getUserId();
  }

  uName() {
    this.regService.getName().subscribe(data => this.userName = data)
  }
  onSubmit() {
    this.donardetails.pId = this.donars.patientId;
    this.donardetails.pName = this.donars.name;
    this.donardetails.phNo = this.donars.phoneNo;
    this.donardetails.plocation = this.donars.location;
    this.donardetails.donarBg = this.donars.bloodGroup;
    this.donardetails.donarName = this.userName[0];
    this.donardetails.donarPhoneNo = this.userId;
    this.donardetails.status = "Accepted";
    this.regService.SetDonarDetails(this.donardetails);
    this.regService.donarreg(this.donardetails).subscribe(data => this.donarId = data);
    alert("YAY!!! Your Booking for Donation is Done. THANK YOU !!!");
    this.regService.deletePatient(this.donars.patientId).subscribe()
    this.router.navigate(['/firstpage']);
  }

}
