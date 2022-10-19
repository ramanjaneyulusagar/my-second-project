import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import data from 'C:/angularAssignment/my-second-project/src/assets/customerdetails/customers.json'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Service1Service } from 'src/app/service/service1.service';
import { HttpserviceService } from '../httpservice.service';
import { Router } from '@angular/router';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { JsonPipe } from '@angular/common';
import { animate, state } from '@angular/animations';
@Component({
  selector: 'app-card-view1',
  templateUrl: './card-view1.component.html',
  styleUrls: ['./card-view1.component.css']
})
export class CardView1Component implements OnInit {
  userdata: any
  faPenToSquare = faPenToSquare;
  @ViewChild('sp', { static: false }) sp: any;
  constructor(private http: HttpClient,
    private service: Service1Service,
    private httpservice: HttpserviceService, private route: Router) { }
  sear: string = '';
  sear1: string = '';
  p: number = 1;
  total: number = 0;
  ngOnInit() {
    this.getAllCustomerData();
  }
  getAllCustomerData() {
    this.httpservice.getAllCustomerData()
      .subscribe((response:any) => {
        this.userdata = response;
      //   this.expo=response;
      // this.expo=this.expo.map((user: any) => {
      //   let orders = user['orders'];
      //   user['orders'] = orders?.map((order: any) => order.productName).join('\n') ?? ''
      //   user['orderCosts'] = orders?.map((order: any) => order.itemCost).join('\n') ?? ''
      //   user['state'] = user['state']['name'];
      //   return user;
      // })
     
        
        console.log(this.userdata)
      })
  }
  routeToViewOrder(data: any) {
    this.route.navigate(['Togglebar1', data])
  }
  edit(data: any) {
    this.route.navigate(['Togglebar2', data])
  }
  public options = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true, 
    showTitle: true,
    title: 'Your title',
    useBom: true,
    noDownload: false,
    Headers:[
      "id","f","ln","gender","address","city"
    ]
  };
 expo:any;
  export(){
   new  ngxCsv((this.expo),'demo', this.options);
  }
}
