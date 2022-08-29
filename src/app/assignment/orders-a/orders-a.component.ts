import { Component, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { faFilm,faPeopleGroup,faUser,faPenToSquare } from '@fortawesome/free-solid-svg-icons';

import data from '/C:/Users/Admin/angular001/my-first-project/src/assets/customerdetails/customers.json';
import data1 from '/C:/Users/Admin/angular001/my-first-project/src/assets/customerdetails/states.json';
interface customer1{
  _id:String,
  id: Number,
  name: String
  abbreviation: String
}

interface customer{

id:string,
firstName:string,lastName:string,
gender:string,
address:string,
city:string,
state:{abbreviation:string,name:string},
orders:[{
    productName:string
    itemCost:number 
}
] 
,
latitude:number,longitude:number
}
@Component({
  selector: 'app-orders-a',
  templateUrl: './orders-a.component.html',
  styleUrls: ['./orders-a.component.css']
})

export class OrdersAComponent implements OnInit {
  faFilm=faFilm;
  faPenToSquare=faPenToSquare;
  faPeopleGroup=faPeopleGroup;
  faUser=faUser;
  constructor(private rend:Renderer2,private http1:HttpClient,private s:Router) { }
  custom:customer[]=data;
  custom1:customer1[]=data1;
  sear:string='';
  ngOnInit(): void {
  }

}
