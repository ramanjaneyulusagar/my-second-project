import { Component, Input, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import data from '/C:/Users/Admin/angular001/my-first-project/src/assets/customerdetails/customers.json';
import data1 from '/C:/Users/Admin/angular001/my-first-project/src/assets/customerdetails/states.json';
import { faFilm, faPeopleGroup, faUser, faPenToSquare } from '@fortawesome/free-solid-svg-icons';


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
  selector: 'app-customers-a',
  templateUrl: './customers-a.component.html',
  styleUrls: ['./customers-a.component.css']
})
export class CustomersAComponent implements OnInit {
  faFilm = faFilm;
  faPenToSquare = faPenToSquare;
  faPeopleGroup = faPeopleGroup;
  faUser = faUser;
  f: string = '';
  sear: string = '';
  getvalue(val: any) {
    console.log(val);
  }
  constructor(private rend: Renderer2, private http1: HttpClient, private s: Router) { }





  custom: customer[] = data;
  custom1: customer1[] = data1;
  gender: any;
  photomf: any;
  mf = '';


  ngOnInit(): void { }
  @ViewChild('b1', { static: true }) b1: any;
  @ViewChild('b2', { static: true }) b2: any;
  @ViewChild('b3', { static: true }) b3: any;
  @ViewChild('b4', { static: true }) b4: any;
  @ViewChild('table', { static: true }) table: any;
  @ViewChild('hview', { static: false }) hview: any;
  @ViewChild('listView', { static: false }) listView: any;
  @ViewChild('cardView', { static: false }) cardView: any;
  @ViewChild('mapView1', { static: false }) mapView1: any;
  @ViewChild('newcustomer', { static: false }) newcustomer: any;
  i: any;
}

