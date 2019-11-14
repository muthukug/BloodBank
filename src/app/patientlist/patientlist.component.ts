import { Component, OnInit, ViewChild } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Patient } from '../Model/patient';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.css']
})
export class PatientListComponent implements OnInit {
 

  patients : Patient[]=[]
  pat;
  constructor(private regService: RegisterService, private router : Router) {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  ngOnInit() {
    this.reloadData();
  }

  doFilter = (value: string) => {
    this.pat.filter = value.trim().toLocaleLowerCase();
  }
 

  reloadData() {
      this.regService.getAllPatient().subscribe(data => {
      this.patients = data;
      this.pat = new MatTableDataSource(this.patients);
      this.pat.paginator = this.paginator;
      this.pat.sort = this.sort;
      console.log(this.patients);
    });
  }

  displayedColumns: string[] = ['patientId', 'name', 'location', 'bloodGroup', 'delete'];


  deletePatient(patientId) {
    if (confirm("Are you sure to delete ")) {
      console.log(this.regService.deletePatient(patientId).subscribe(),
      window.location.reload()
      );
     // this.router.navigateByUrl('patientlist')
    }


  }
}
