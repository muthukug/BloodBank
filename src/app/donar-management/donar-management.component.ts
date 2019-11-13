import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-donar-management',
  templateUrl: './donar-management.component.html',
  styleUrls: ['./donar-management.component.css']
})
export class DonarManagementComponent implements OnInit {

  don: Observable<any>

  constructor(private regService: RegisterService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.don = this.regService.getAllDonar();
  }

  deleteDonar(donarId) {
    if (confirm("Are you sure to delete ")) {
      console.log(this.regService.deleteDonar(donarId).subscribe(),
        this.don = this.regService.getAllDonar()
      );
    }
  }
}