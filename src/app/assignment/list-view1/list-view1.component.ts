import { HttpClient } from '@angular/common/http';
import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import data from '/C:/Users/Admin/angular001/my-first-project/src/assets/customerdetails/customers.json';
import data1 from '/C:/Users/Admin/angular001/my-first-project/src/assets/customerdetails/states.json';
interface customer1 {
  _id: String,
  id: Number,
  name: String
  abbreviation: String
};
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
  selector: 'app-list-view1',
  templateUrl: './list-view1.component.html',
  styleUrls: ['./list-view1.component.css']
})
export class ListView1Component implements OnInit {
  constructor(private http: HttpClient, private route1: Router) { };
  custom: customer[] = data;
  custom1: customer1[] = data1;
  sear: string = '';
  p: number = 1;
  total: number = 0;
  ngOnInit(): void {
    this.custom;
    this.custom.map((c: any) => {
      c['cost'] = 0.0
      if (c?.orders) {
        c.orders.map((o: any) => {
          c['cost'] = c['cost'] + o.itemCost;
        });
      };
    })
  };
  name: any = [];

  routeToViewOrder(singlecustomerdata: any) {
    debugger;
    this.route1.navigate(['CustomersOrders1'],
      {
        queryParams: {
          ...singlecustomerdata

        }
      });
  }
  routeToCustomerDetails(singlecustomerdata: any) {
    debugger;
    this.route1.navigate(['Onclickcustomerdata'],
      {
        queryParams: {
          ...singlecustomerdata

        }
      });
  }
};
