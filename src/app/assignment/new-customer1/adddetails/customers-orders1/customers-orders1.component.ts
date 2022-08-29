import { Component, OnInit } from '@angular/core';
import { faFilm,faPeopleGroup,faUser,faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import data from '/C:/Users/Admin/angular001/my-first-project/src/assets/customerdetails/customers.json';
import data1 from '/C:/Users/Admin/angular001/my-first-project/src/assets/customerdetails/states.json';
interface customer1{
  _id:string,
  id: number,
  name: string
  abbreviation: string
}

interface customer{

id:string,
firstName:string,lastName:string,
gender:string,
address:string,
city:string,
state:{abbreviation:string,name:string},
orders:[{
    productName:string
    itemCost:number 
}
] 
,
latitude:number,longitude:number
}

@Component({
  selector: 'app-customers-orders1',
  templateUrl: './customers-orders1.component.html',
  styleUrls: ['./customers-orders1.component.css']
})
export class CustomersOrders1Component implements OnInit {
  faFilm=faFilm;
  faPenToSquare=faPenToSquare;
  faPeopleGroup=faPeopleGroup;
  faUser=faUser;
   f:string='';
    sear:string='';
    custom:customer[]=data;
    custom1:customer1[]=data1;
  constructor() { }

  ngOnInit(): void {
  }

}
