import { Injectable } from '@angular/core';
import { customer } from './customerdata1';
import {
  HttpClient, HttpEvent,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { USERS } from './user.data';
import { of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
interface User {
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  setGroupFilter$ = new Subject<any>();
  getGroupFilter = this.setGroupFilter$.asObservable();
  saveUserTyped(user: User) {
    throw new Error('Method not implemented.');
  }
  jsondata: any;
  constructor(private http: HttpClient) { }
  fetchUsers(): Observable<any> {
    return of(USERS);
  }
  getAllCustomerData() {
    return this.http.get("http://localhost:3000/customerdata");
  }
  update(data: customer) {
    console.log(data);
    return this.http.put(`http://localhost:3000/customerdata/${data.id}`, data)
  }
  delete(data: customer) {
    return this.http.delete<customer>(`http://localhost:3000/customerdata/${data.id}`)
  }
  createdata(data: customer) {
    return this.http.post<customer>("http://localhost:3000/customerdata", data)
  }
  getbyid(id: any) {
    return this.http.get<customer>(`http://localhost:3000/customerdata/${id}`)
  }
  create(data: User) {
    return this.http.post<User>("http://localhost:3000/profile", data)
  }
  create1() {
    return this.http.get<User>("http://localhost:3000/profile")
  }

  getfilterdata(val: any) {
    return this.http.get(`http://localhost:3000/customerdata/${val}`)

  }
}
