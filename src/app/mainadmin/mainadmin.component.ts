import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterService } from '../services/register.service';
import { Patient } from '../Model/patient';
import { Donar } from '../Model/donar';

@Component({
  selector: 'app-mainadmin',
  templateUrl: './mainadmin.component.html',
  styleUrls: ['./mainadmin.component.css']
})
export class MainadminComponent implements OnInit {


  constructor(private router: Router, private regService: RegisterService) {
  }

  details: Patient[] = []
  locations: Observable<any>
  donars: Donar

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
    });

  }
  assign(donars) {
    this.regService.setDonarList(donars);
    this.router.navigate(['/assigndonar']);
  }
}

