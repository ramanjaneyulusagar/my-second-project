import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { faFilm, faPeopleGroup, faUser, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Header2Component } from 'src/app/assignment/header2/header2.component';
import { ListView1Component } from 'src/app/assignment/list-view1/list-view1.component';
interface customer {
  id: string,
  firstName: string, lastName: string,
  gender: string,
  address: string,
  city: string,
  state: {
    abbreviation: string, name: string
  },
  orders:
  [{
    productName: string
    itemCost: number
  }],
  latitude: number, longitude: number
};
@Component({
  selector: 'app-customers-orders1',
  templateUrl: './customers-orders1.component.html',
  styleUrls: ['./customers-orders1.component.css']
})
export class CustomersOrders1Component implements OnInit {
  faFilm = faFilm;
  faPenToSquare = faPenToSquare;
  faPeopleGroup = faPeopleGroup;
  faUser = faUser;
  f: string = '';
  sear: string = '';
  constructor(private activatedRoute: ActivatedRoute) { }
  customer:any=[];
  valid=true;
  orderData:any=[];
  @ViewChild(Header2Component) userdata!: Header2Component;
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(((paramdata: any) => {
      this.customer = JSON.parse(paramdata.data);
       this.customer;
      
    }))
    //console.log(this.data);

  }

}
