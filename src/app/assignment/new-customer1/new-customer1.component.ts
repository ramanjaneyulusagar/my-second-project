import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { Data } from '@angular/router';
import { Customer1Component } from 'src/app/customer/customer1/customer1.component';
import data from '/C:/Users/Admin/angular001/my-first-project/src/assets/customerdetails/customers.json';
import data1 from '/C:/Users/Admin/angular001/my-first-project/src/assets/customerdetails/states.json';

interface customer1{
  _id:String,
  id: Number,
  name: String
  abbreviation: String
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
  selector: 'app-new-customer1',
  templateUrl: './new-customer1.component.html',
  styleUrls: ['./new-customer1.component.css']
})
export class NewCustomer1Component implements OnInit {
  @Input()parentData:any;
  custom:customer[]=data;
  custom1:customer1[]=data1;
  sear:string='';
  p: number = 1;
  total: number = 0;
  formValue ! : FormGroup;
  
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      id:[''],
      firstName:[''],
      lastName:[''],
    
      city:[''],
      gender:[''],
      address:[''],
      state:
      {
        abbreviation:[''],name:[''],
      },
        orders:[
          {productName:[''],itemCost:['']}
        ],
        latitude:[''],longitude:['']
      

    });
  }


}
