import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpserviceService } from '../httpservice.service';
import { customer } from '../customerdata1';
@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css']
})
export class CustomerOrdersComponent implements OnInit {
  userdata: any
  sear: string = '';
  p: number = 1;
  total: number = 0;
  constructor(private http: HttpClient,
    private route: Router,
    private httpservice: HttpserviceService) { }

  ngOnInit(): void {
    this.getAllCustomerData();
  }
  getAllCustomerData() {

    this.httpservice.getAllCustomerData().subscribe(response => {
      this.userdata = response;
      this.userdata.map((c: any) => {
        c['cost'] = 0.0
        if (c?.orders) {
          c.orders.map((o: any) => {
            c['cost'] = c['cost'] + o.itemCost;
          });
        };
      })
      console.log(this.userdata)
    })

  }
  goback() {
    this.route.navigate(['ListView1'])
  }
  routeToCustomerDetails(data: any) {
    //debugger;
    this.route.navigate(['Togglebar'],
      {
        queryParams: {
          data: JSON.stringify(data),

        }

      }
    );
  }
}
