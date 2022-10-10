import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpserviceService } from '../httpservice.service';
import data from '/src/assets/customerdetails/customers.json'
import { customer1 } from '../customer2';
import * as XLSX from 'xlsx'

@Component({
  selector: 'app-list-view1',
  templateUrl: './list-view1.component.html',
  styleUrls: ['./list-view1.component.css']
})
export class ListView1Component implements OnInit {
  constructor(private http: HttpClient, private route: Router, private httpservice: HttpserviceService, private router: Router) { };
  userdata: any
  sear: string = '';
  p: number = 1;
  total: number = 0;
  ngOnInit(): void {
    this.getAllCustomerData();
  }
  sub(data: any) {
    this.createdata(data).subscribe(data => {
      this.userdata = data
    })
  }
  createdata(data: any) {
    return this.http.get("http://localhost:3000/customerdata", data)
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
  // exportfile(data:any){
  //  const excel_type='application/nd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  //  const extension='.xlsx';
  //  const worksheet=XLSX.utils.json_to_sheet(data) ;
  //  const workbook={
  //   sheets:{
  //     'cdata':worksheet
  //   },
  //   sheetNames:['cdata']
  //  }
  //  const excelbuffer=XLSX.write(workbook,{bookType:'xlsx',type:'array'});
  //  const blobdata=new Blob([excelbuffer],{})
  // }

}
  // routeToViewOrder(data:any) {
  //   //console.log(data)
  //   this.route.navigate(['Togglebar1'],
  //     {
  //       queryParams: {
  //         data: JSON.stringify(data)

  //       }
  //     }
  //   );

  // }

  // routeToCustomerDetails(data: any) {
  //   //debugger;
  //   this.route.navigate(['Togglebar'],
  //     {
  //       queryParams: {
  //         data: JSON.stringify(data),

  //       }

  //     }
  //   );
  // }
