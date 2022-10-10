import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import data from 'C:/angularAssignment/my-second-project/src/assets/customerdetails/customers.json'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Service1Service } from 'src/app/service/service1.service';
import { HttpserviceService } from '../httpservice.service';
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
    private httpservice: HttpserviceService) { }
  sear: string = '';
  sear1: string = '';
  p: number = 1;
  total: number = 0;
  ngOnInit() {
    this.getAllCustomerData();
  }
  getAllCustomerData() {
    this.httpservice.getAllCustomerData()
      .subscribe(response => {
        this.userdata = response;
        console.log(this.userdata)
      })
  }
}
