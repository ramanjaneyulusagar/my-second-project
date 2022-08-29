 import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { Angular1Component } from './angular1/angular1.component';
import { EmployeedataComponent } from './employeedata/employeedata.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Customer1Component } from './customer/customer1/customer1.component';
import { FormBuilder } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomerLogin1Component } from './customer-login1/customer-login1.component';
import { CustomersAComponent } from './assignment/customers-a/customers-a.component';
import { OrdersAComponent } from './assignment/orders-a/orders-a.component';
import { CustomersDetailsAComponent } from './assignment/customers-details-a/customers-details-a.component';
import { AboutAComponent } from './assignment/about-a/about-a.component';
import { LoginAComponent } from './assignment/login-a/login-a.component';

import { FilterPipe } from './assignment/filter.pipe';
import { ListView1Component } from './assignment/list-view1/list-view1.component';
import { CardView1Component } from './assignment/card-view1/card-view1.component';
import { MapViewComponent } from './assignment/map-view/map-view.component';
import { NewCustomer1Component } from './assignment/new-customer1/new-customer1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomersDetails1Component } from './assignment/new-customer1/adddetails/customers-details1/customers-details1.component';
import { CustomersOrders1Component } from './assignment/new-customer1/adddetails/customers-orders1/customers-orders1.component';
import { EditCustomer1Component } from './assignment/new-customer1/adddetails/edit-customer1/edit-customer1.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Header1Component } from './assignment/header1/header1.component';
import { HeaderComponent } from './assignment/header/header.component';









@NgModule({
  declarations: [
    AppComponent,
    Angular1Component,
    EmployeedataComponent,
    Assignment1Component,
    Customer1Component,
    CustomerLogin1Component,
    CustomersAComponent,
    OrdersAComponent,
    CustomersDetailsAComponent,
    AboutAComponent,
    LoginAComponent,
    FilterPipe,
    ListView1Component,
    CardView1Component,
    MapViewComponent,
    NewCustomer1Component,
    CustomersDetails1Component,
    CustomersOrders1Component,
    EditCustomer1Component,
    Header1Component,
    HeaderComponent,
    
    
    
    
    
  
  ],
  imports: [
    BrowserModule,
    NgbModule,HttpClientModule,NgxPaginationModule,
    
  
    RouterModule.forRoot(

      [
     {path:"Customer1Component",component:Customer1Component},
     {path:'Assignment1Component',component:Assignment1Component},
     {path:'CustomerLogin1Component',component:CustomerLogin1Component},
     {path:'CustomersA',component:CustomersAComponent},
     {path:'EmployeedataComponent',component:EmployeedataComponent},
    { path:'ListView1Component',component:ListView1Component},
     {path:'CardView1Component',component:CardView1Component},
     {path:'MapViewComponent',component:MapViewComponent},
     {path:'OrdersAComponent',component:OrdersAComponent},
     {path:'AboutAComponent',component:AboutAComponent},
     {path:'NewCustomer1Component',component:NewCustomer1Component},
     {path:'CustomersDetails1Component',component:CustomersDetails1Component},
     {path:'CustomersOrders1Component',component:CustomersOrders1Component},
     {path:'EditCustomer1Component',component:EditCustomer1Component},
     {path:'Header1Component ',component:Header1Component },
     {path:'HeaderComponent ',component:HeaderComponent },
      ]
    ),
       FontAwesomeModule,ReactiveFormsModule,FormsModule,RouterModule, BrowserAnimationsModule,
       
      
       
    
      
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent],
})
export class AppModule { }
