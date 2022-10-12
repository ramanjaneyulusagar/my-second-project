import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})

export class Service1Service {
  url = 'assets/customerdetails/customers.json';
  constructor(private http: HttpClient) { }
  Wcount(count: Number) {
    console.warn(count);
  }

  getTodo() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')

  }
  getTodo1() {
    return this.http.get(this.url);
  }
}
