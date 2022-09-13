import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import data from 'C:/angularAssignment/my-second-project/src/assets/customerdetails/customers.json'
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


  custom= data;
  faPenToSquare = faPenToSquare;
  selectedData: any;
  @ViewChild('sp', { static: false }) sp: any;
  constructor(private http: HttpClient, private service: Service1Service) { }
  sear: string = '';
  p: number = 1;
  total: number = 0;
  ngOnInit() {

  }


  
  
}
