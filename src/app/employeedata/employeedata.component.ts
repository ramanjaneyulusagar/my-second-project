import { Component, OnInit } from '@angular/core';
import Data from '../employeedata.json';
import { Observable } from 'rxjs';
import { customer3 } from '../assignment/customer3';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-employeedata',
  templateUrl: './employeedata.component.html',
  styleUrls: ['./employeedata.component.css']
})
export class EmployeedataComponent implements OnInit {
  public employee: customer3[] = Data;
  public students: any;
  constructor(private http: HttpClient) { }
  public res: any
  public url = 'assets/customerdetails/customers.json';
  ngOnInit() {
    this.getTodo().subscribe((res: any) => {
      this.students = res;
    })
  }
  getTodo() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')

  }
  getTodo1() {
    return this.http.get(this.url);
  }
}



