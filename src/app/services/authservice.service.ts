import { Injectable, Input } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {


  constructor() {
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }

  isAdminLoggedIn() {
    let admin = sessionStorage.getItem('adminname')
    return !(admin === null)
  }


  logOut() {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('adminname')
  }


}

