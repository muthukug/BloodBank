import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { Observable } from 'rxjs';
import { Donar } from '../Model/donar';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  userName: Observable<any>
  user:any;
  constructor(private router: Router, private regService: RegisterService) { }

  ngOnInit() {
    this.onSubmit();
    this.regService.getName().subscribe(data => this.user = data)
  }

  onSubmit() {
    this.regService.findBydonarPhoneNo().subscribe(data => this.userName = data)
  }

  reject(donarId) {
    this.regService.deleteDonar(donarId).subscribe()
    alert("Blood Request Rejected")
  }

  accept(donarId,pId) {
    let status = 'Accepted';
    this.regService.updateDonarStatus(status, donarId).subscribe()
    alert("Blood Request Accepted")
    this.regService.deletePatient(pId).subscribe()
  }
}
