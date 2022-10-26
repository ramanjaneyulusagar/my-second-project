import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpserviceService } from '../httpservice.service';
@Component({
  selector: 'app-list-view1',
  templateUrl: './list-view1.component.html',
  styleUrls: ['./list-view1.component.css']
})
export class ListView1Component implements OnInit {
  constructor(private http: HttpClient, private route: Router, private httpservice: HttpserviceService, private router: Router) { };
  public userdata: any
  public sear: string = '';
  public p: number = 1;
  public total: number = 0;
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
  routeToCustomerDetails(data: any) {
    this.route.navigate(['Togglebar', data]
    );
  }
  routeToViewOrder(data: any) {
    this.route.navigate(['Togglebar1', data])
  }
}
