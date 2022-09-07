import { keyframes } from '@angular/animations';
import { JsonPipe } from '@angular/common';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { faFilm, faPeopleGroup, faUser, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { ListView1Component } from 'src/app/assignment/list-view1/list-view1.component';
import { __values } from 'tslib';
import data from '/C:/Users/Admin/angular001/my-first-project/src/assets/customerdetails/customers.json';
import data1 from '/C:/Users/Admin/angular001/my-first-project/src/assets/customerdetails/states.json';
interface customer1 {
  _id: string,
  id: number,
  name: string
  abbreviation: string
}

interface customer {

  id: string,
  firstName: string, lastName: string,
  gender: string,
  address: string,
  city: string,
  state: { abbreviation: string, name: string },
  orders: [{
    productName: string
    itemCost: number
  }
  ]
  ,
  latitude: number, longitude: number
}
@Component({
  selector: 'app-customers-details1',
  templateUrl: './customers-details1.component.html',
  styleUrls: ['./customers-details1.component.css']
})
export class CustomersDetails1Component implements OnInit {
  @Input() customerdata: any
  @ViewChild(ListView1Component) userdata!: ListView1Component
  constructor(private routeto: ActivatedRoute,) { }
  faFilm = faFilm;
  faPenToSquare = faPenToSquare;
  faPeopleGroup = faPeopleGroup;
  faUser = faUser;
  f: string = '';
  sear: string = '';
  names:any;
  custom: customer[] = data;
  custom1: customer1[] = data1;
  customerdatatranfer: any;
  importListView: any;
  //objectKeys = Object.keys;
  ngOnInit() {
    
  
//this.names=data[(parseInt(this.routeto.queryParams(['_value'].id, 10) -1)];
    this.routeto.queryParams.subscribe(((paramdata:any) => {
      this.names=paramdata
    }))
    console.log(this.names)
  }


}
