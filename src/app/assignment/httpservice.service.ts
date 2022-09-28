import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
jsondata:any;
  constructor(private http:HttpClient) { }
  url="assets/customerdetails/customers.json";
passdata(){
   return this.http.get(this.url)

}

}
