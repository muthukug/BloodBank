import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterService } from '../services/register.service';
import { Patient } from '../Model/patient';
import { Donar } from '../Model/donar';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-mainadmin',
  templateUrl: './mainadmin.component.html',
  styleUrls: ['./mainadmin.component.css']
})
export class MainadminComponent implements OnInit {
  dat: any;


  constructor(private router: Router, private regService: RegisterService) {
  }

  details: Patient[] = []
  locations: Observable<any>
  donars: Donar

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['patientId', 'name', 'bloodGroup', 'assign'];
  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.regService.getLocation().subscribe(data => {
      this.locations = data
    });

  }

  findByLocation(location) {
    this.regService.findByLocation(location).subscribe(data => {
      this.details = data;
      this.dat = new MatTableDataSource(this.details);
      this.dat.paginator = this.paginator;
      this.dat.sort = this.sort;
      console.log(this.details);
    });

  }
  assign(donars) {
    this.regService.setDonarList(donars);
    this.router.navigate(['/assigndonar']);
  }
}

