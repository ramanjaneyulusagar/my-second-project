import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import db from 'src/app/server/db.json';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  constructor(private route: Router, private authservice: AuthserviceService) { }
  login(email: string, password: string) {
    if (email == "aaaaaa" && password == "aaaaaa") {
      localStorage.setItem('currentuser', 'loggedin');
      return true;
    }
    return false
  }
  logout(){
    localStorage.removeItem('currentuser');
  }
public get loggedin():boolean{
  return (localStorage.getItem('currentuser')!==null);
}
  // isAuthenticate: boolean = true;

  // login(email: string, password: string): Observable<boolean> {
  //   if (email === 'ad' && password === 'add') {
  //     this.isAuthenticate = true;
  //     return of(true);

  //   }

  //   return of(false);
  // }

}
