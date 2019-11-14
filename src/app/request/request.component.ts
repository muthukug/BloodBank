import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { Observable } from 'rxjs';
import { Donar } from '../Model/donar';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { DonarManagementComponent } from '../donar-management/donar-management.component';
import { DoanrDetails } from '../Model/donarDetails';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  userName: DoanrDetails[]=[]
  user:any;
  dons:any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  displayedColumns: string[] = ['donarId', 'pId', 'pName', 'plocation', 'phNo' , 'donarName' , 'donarPhoneNo' , 'status' ];
  
  constructor(private router: Router, private regService: RegisterService) { }

  ngOnInit() {
    this.onSubmit();
    this.regService.getName().subscribe(data => this.user = data)
  }

  doFilter = (value: string) => {
    this.dons.filter = value.trim().toLocaleLowerCase();
  }
 


  onSubmit() {
    this.regService.findBydonarPhoneNo().subscribe(data => {
      this.userName = data;
      this.dons = new MatTableDataSource(this.userName);
      this.dons.paginator = this.paginator;
      this.dons.sort = this.sort;
      console.log(this.userName);
    });
  }

  reject(donarId) {
    this.regService.deleteDonar(donarId).subscribe()
    alert("Blood Request Rejected")
    window.location.reload()
  }

  accept(donarId,pId) {
    let status = 'Accepted';
    this.regService.updateDonarStatus(status, donarId).subscribe()
    alert("Blood Request Accepted")
    this.regService.deletePatient(pId).subscribe()
    window.location.reload();
  }
}
