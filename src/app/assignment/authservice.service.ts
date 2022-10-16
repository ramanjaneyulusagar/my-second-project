import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import db from 'src/app/server/db.json';
import { loginUser } from './login'
interface login {
  email: string, password: string
}
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {

    return this.loggedIn.asObservable();
  }
  loginUser(user: loginUser) {
    if (user.email !== '' && user.password !== '') {
      this.loggedIn.next(true);
      this.route.navigate(['/']);
    }
  } 
  logoutUser() {
    this.loggedIn.next(false);
    this.route.navigate(['/login']);
  }
  constructor(private route: Router, private authservice: AuthserviceService) { }
  login(email: string, password: string) {
    if (email == "ramsagar" && password == "123456") {
      localStorage.setItem('currentuser', 'loggedin');
      return true;
    }
    
    return false
    
  }
  logout() {
    localStorage.removeItem('currentuser');
  }
  public get loggedin(): boolean {
    return (localStorage.getItem('currentuser') !== null);
  }
}
