import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }

  isAuthenticate: boolean = true;

  login(email: string, password: string): Observable<boolean> {
    if (email === 'ad' && password === 'add') {
      this.isAuthenticate = true;
      return of(true);
    }
    
    return of(false);
  }

}
