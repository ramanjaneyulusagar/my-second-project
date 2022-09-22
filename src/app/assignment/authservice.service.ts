import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import db from 'src/app/server/db.json';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  logout() {
    this.route.navigate(['']);
    //localStorage.removeItem('user');

    //throw new Error('Method not implemented.');
  }

  constructor(private route:Router,private authservice:AuthserviceService) { }

  isAuthenticate: boolean = true;

  login(email: string, password: string): Observable<boolean> {
    if (email === 'ad' && password === 'add') {
      this.isAuthenticate = true;
      return of(true);
      
    }
    
    return of(false);
  }

}
