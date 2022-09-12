import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import data1 from '/C:/Users/Admin/angular001/my-first-project/src/assets/customerdetails/states.json';
import data from '/C:/Users/Admin/angular001/my-first-project/src/assets/customerdetails/customers.json';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Service1Service } from 'src/app/service/service1.service';


interface customer1 {
  _id: String,
  id: Number,
  name: String
  abbreviation: String
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
  selector: 'app-card-view1',
  templateUrl: './card-view1.component.html',
  styleUrls: ['./card-view1.component.css']
})
export class CardView1Component implements OnInit {

  custom1: customer1[] = data1;
  custom: customer[] = data;
  faPenToSquare = faPenToSquare;
  selectedData: any;
  @ViewChild('sp', { static: false }) sp: any;
  constructor(private http: HttpClient, private service: Service1Service) { }
  sear: string = '';
  p: number = 1;
  total: number = 0;
  ngOnInit() {

  }


  data: any;
  viewDetails(userData: any) {
    console.log(userData);
    this.selectedData = userData;


    if (this.sp.nativeElement.style.display === "block") {
      this.sp.nativeElement.style.display = "none";

    }
    else {
      this.sp.nativeElement.style.display = "block";
    }

  }
}
