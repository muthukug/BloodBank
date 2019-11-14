import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { Donar } from '../Model/donar';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {

  donarList: Donar[] = []
  donars: Donar
  user:any
  pats:any
  constructor(private router: Router, private regService: RegisterService) { }

  ngOnInit() {
    this.getPatient()
    this.regService.getName().subscribe(data=>this.user=data);
  }

  doFilter = (value: string) => {
    this.pats.filter = value.trim().toLocaleLowerCase();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['patientId', 'name', 'location', 'bloodGroup', 'donate'];
  
  getPatient() {
    this.regService.getAllPatient().subscribe(data => {
      this.donarList = data;
      this.pats = new MatTableDataSource(this.donarList);
      this.pats.paginator = this.paginator;
      this.pats.sort = this.sort;
      console.log(this.donarList);
    });
  }


  donate(donars) {
    this.regService.setDonarList(donars);
    this.router.navigate(['/confirmdonar']);
  }
}
