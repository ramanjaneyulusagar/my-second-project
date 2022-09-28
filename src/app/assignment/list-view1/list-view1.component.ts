import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import data from '/src/assets/customerdetails/customers.json'
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
  state: [{
    abbreviation: string, name: string
  }],
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
  constructor(private http: HttpClient, private route: Router) { };
  customers: any[] = data
  url = 'assets/customerdetails/customers.json';

  sear: string = '';
  p: number = 1;
  total: number = 0;
  ngOnInit(): void {

    this.customers.map((c: any) => {
      c['cost'] = 0.0
      if (c?.orders) {
        c.orders.map((o: any) => {
          c['cost'] = c['cost'] + o.itemCost;
        });
      };
    })
  };
  name: any = [];

  routeToViewOrder(data: any) {
    console.log(data)
    this.route.navigate(['Togglebar1'],
      {
        queryParams: {
          data: JSON.stringify(data)

        }
      });
  }

  routeToCustomerDetails(data: any) {
    //debugger;
    this.route.navigate(['Togglebar'],
      {
        queryParams: {
          data: JSON.stringify(data)

        }

      });
    console.log(data)
  }
};
