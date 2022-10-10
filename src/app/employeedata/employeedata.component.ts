import { Component, OnInit } from '@angular/core';
import Data from '../employeedata.json';
import { Service1Service } from '../service/service1.service';
import { Observable } from 'rxjs';
import { customer3 } from '../assignment/customer3';
@Component({
  selector: 'app-employeedata',
  templateUrl: './employeedata.component.html',
  styleUrls: ['./employeedata.component.css']
})
export class EmployeedataComponent implements OnInit {
  employee: customer3[] = Data;
  students: any;
  constructor(private service1: Service1Service) { }
  res: any
  ngOnInit() {
    this.service1.getTodo().subscribe(res => {
      this.students = res;
    })
  }
}



