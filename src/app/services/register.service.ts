import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registration } from '../Model/Registration';
import { Observable } from 'rxjs';
import { AdminReg } from '../Model/AdminReg';
import { Patient } from '../Model/patient';
import { Donar } from '../Model/donar';
import { DoanrDetails } from '../Model/donarDetails';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {



  private baseUrl = 'http://localhost:8181/api';
  location: any;
  get: any;
  donars: Donar
  editor:Registration
  donardetails: DoanrDetails
  uName: String;
  useName: String;
  usName:String;
  names:String;

  constructor(private http: HttpClient) { }

  register(registration: Registration): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/register`, registration);
  }

  patientreg(patient: Patient): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/patientreg`, patient);
  }

  adminregister(admin: AdminReg): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/adminregister`, admin);
  }

  login(uName, pwd): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/login/${uName}/${pwd}`);
  }

  adminlogin(uName, pwd): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/adminlogin/${uName}/${pwd}`);
  }

  edit(phoneNo, password): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/updatePassword/${phoneNo}/${password}`);
  }

  getAllPatient(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/getAllPatient`);
  }

  getLocation(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/getLocation/`);
  }

  getUserLocation(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/getUserLocation/`);
  }

  deletePatient(patientId: any) {
    return this.http.delete(`${this.baseUrl}/deletePatient/${patientId}`);
  }

  findByLocation(location: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/findByLocation/${location}`);
  }

  findByUserLocation(location: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/findByUserLocation/${location}`);
  }


  findByBloodGroup(bloodGroup: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/findByBloodGroup/${bloodGroup}`);
  }


  setDonarList(donars) {
    this.donars = donars;
  }


  SetDonarDetails(donardetails: DoanrDetails) {
    this.donardetails = donardetails;
  }

  getSetDonarList() {
    return this.donars
  }

  getName(): Observable<any> {
    this.uName = sessionStorage.getItem("username")
    return this.http.get(`${this.baseUrl}` + `/getName/${this.uName}`);
  }

  getUserId() {
    return this.uName;
  }

  donarreg(donardetails: DoanrDetails): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/donarreg`, donardetails);
  }

  getAllDonar(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/getAllDonar`);
  }

  deleteDonar(donarId: any) {
    return this.http.delete(`${this.baseUrl}/deleteDonar/${donarId}`);
  }

  findName(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/findName/`);
  }

  findByName(name: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/findByName/${name}`);
  }

  findPatName(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/findPatName/`);
  }

  findByPatName(name: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/findByPatName/${name}`);
  }

  findBydonarPhoneNo(): Observable<any> {
    this.useName = sessionStorage.getItem("username")
    return this.http.get(`${this.baseUrl}` + `/findBydonarPhoneNo/${this.useName}`);
  }

  updateDonarStatus(status, doanrId): Observable<Object> {
    return this.http.get(`${this.baseUrl}` + `/updateDonarStatus/${status}/${doanrId}`);
  }

  updateUserPassword(phoneNo, password): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/updateUserPassword/${phoneNo}/${password}`);
  }

}
