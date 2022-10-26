import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import data from 'C:/angularAssignment/my-second-project/src/assets/customerdetails/customers.json'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { HttpserviceService } from '../httpservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card-view1',
  templateUrl: './card-view1.component.html',
  styleUrls: ['./card-view1.component.css']
})
export class CardView1Component implements OnInit {
  public userdata: any
  faPenToSquare = faPenToSquare;
  @ViewChild('sp', { static: false }) sp: any;
  constructor(private http: HttpClient,
    private httpservice: HttpserviceService, private route: Router) { }
  public sear: string = '';
  public sear1: string = '';
  public p: number = 1;
  public total: number = 0;
  ngOnInit() {
    this.getAllCustomerData();
  }
  getAllCustomerData() {
    this.httpservice.getAllCustomerData()
      .subscribe((response: any) => {
        this.userdata = response;
        console.log(this.userdata)
      })
  }
  routeToViewOrder(data: any) {
    this.route.navigate(['Togglebar1', data])
  }
  edit(data: any) {
    this.route.navigate(['Togglebar2', data])
  }
}
