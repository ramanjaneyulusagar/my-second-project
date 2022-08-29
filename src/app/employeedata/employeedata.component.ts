

import { Component, OnInit } from '@angular/core';
import Data from '../employeedata.json';
import { Service1Service } from '../service/service1.service';
  
import {Observable } from 'rxjs';


interface E {
userId:Number;
id:Number;
title:String;
body:String
}


@Component({
  selector: 'app-employeedata',
  templateUrl: './employeedata.component.html',
  styleUrls: ['./employeedata.component.css']
})
export class EmployeedataComponent implements OnInit {
  // using the file path we fetch the student data just print the json data
  //using below variable employee   
  employee:E[]=Data;
  
  students:any;
  constructor(private service1:Service1Service) { }
   res:any
  ngOnInit(){
    this.service1.getTodo().subscribe(res =>{
     this.students=res;
      
    })
    
    }
   
    
  }
  


