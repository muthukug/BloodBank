import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { Donar } from '../Model/donar';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {

  donarList: Donar[] = []
  donars: Donar
  user:any
  constructor(private router: Router, private regService: RegisterService) { }

  ngOnInit() {
    this.getPatient()
    this.regService.getName().subscribe(data=>this.user=data);
  }

  getPatient() {
    this.regService.getAllPatient().subscribe(data => this.donarList = data)
  }


  donate(donars) {
    this.regService.setDonarList(donars);
    this.router.navigate(['/confirmdonar']);
  }
}
