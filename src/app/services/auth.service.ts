import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserValid(): boolean {
    const loggedInUser = sessionStorage.getItem("username");
    if (loggedInUser != null && localStorage.getItem("type") == "user") {
      return true;
    }
    else
      return false;
  }

  isAdminValid(): boolean {
    const loggedInAdmin = sessionStorage.getItem("adminname");
    if (loggedInAdmin != null && localStorage.getItem("type") == "admin") {
      return true;
    }
    else
      return false;
  }

  constructor() { }
}
