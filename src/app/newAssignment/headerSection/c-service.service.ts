import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customerdata } from './customerdata';

@Injectable({
  providedIn: 'root'
})
export class CServiceService {

  constructor(private httpclient: HttpClient) { }
getdata(){
 return this.httpclient.get<Customerdata[]>("http://localhost:3000/customerdata")
}

}
