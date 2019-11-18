import { Component, OnInit, ViewChild } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Observable } from 'rxjs';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DoanrDetails } from '../Model/donarDetails';

@Component({
  selector: 'app-donar-management',
  templateUrl: './donar-management.component.html',
  styleUrls: ['./donar-management.component.css']
})
export class DonarManagementComponent implements OnInit {

 dons
  don: Observable<any>
donor:DoanrDetails[]=[]
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  displayedColumns: string[] = ['donarId', 'pId', 'pName', 'plocation', 'phNo' , 'donarName' , 'donarPhoneNo' , 'status' , 'delete'];

  constructor(private regService: RegisterService) { }

  ngOnInit() {
    this.reloadData();
  }

  doFilter = (value: string) => {
    this.dons.filter = value.trim().toLocaleLowerCase();
  }
 

  reloadData() {
      this.regService.getAllDonar().subscribe(data => {
      this.donor = data;
      this.dons = new MatTableDataSource(this.donor);
      this.dons.paginator = this.paginator;
      this.dons.sort = this.sort;
      console.log(this.donor);
    });
  }
  deleteDonar(donarId) {
    if (confirm("Are you sure to delete ")) {
      console.log(this.regService.deleteDonar(donarId).subscribe(),
        this.don = this.regService.getAllDonar(),
        window.location.reload()
      );
    }
  }
}