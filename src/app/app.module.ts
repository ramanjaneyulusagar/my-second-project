import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Angular1Component } from './angular1/angular1.component';
import { EmployeedataComponent } from './employeedata/employeedata.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Assignment1Component } from './assignment1/assignment1.component';
import { FormBuilder } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomersAComponent } from './assignment/customers-a/customers-a.component';
import { CustomersDetailsAComponent } from './assignment/customers-details-a/customers-details-a.component';
import { AboutAComponent } from './assignment/about-a/about-a.component';
import { LoginAComponent } from './assignment/login-a/login-a.component';
import { FilterPipe } from './assignment/filter.pipe';
import { ListView1Component } from './assignment/list-view1/list-view1.component';
import { CardView1Component } from './assignment/card-view1/card-view1.component';
import { MapViewComponent } from './assignment/map-view/map-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomersDetails1Component } from './assignment/new-customer1/adddetails/customers-details1/customers-details1.component';
import { CustomersOrders1Component } from './assignment/new-customer1/adddetails/customers-orders1/customers-orders1.component';
import { EditCustomer1Component } from './assignment/new-customer1/adddetails/edit-customer1/edit-customer1.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Header1Component } from './assignment/header1/header1.component';
import { HeaderComponent } from './assignment/header/header.component';
import { ParentComponent } from './parent/child/parent/parent.component';
import { ChildComponent } from './parent/child/child/child.component';
import { AppRoutingModule } from './app-routing.module';
import { NewCustomerComponent } from './assignment/new-customer1/adddetails/new-customer/new-customer.component';
import { OnclickcustomerdataComponent } from './assignment/new-customer1/onclickcustomerdata/onclickcustomerdata.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Header2Component } from './assignment/header2/header2.component';

@NgModule({
  declarations: [
    AppComponent,
    Angular1Component,
    EmployeedataComponent,
    Assignment1Component,
    CustomersAComponent,
    CustomersDetailsAComponent,
    AboutAComponent,
    LoginAComponent,
    FilterPipe,
    ListView1Component,
    CardView1Component,
    MapViewComponent,
    CustomersDetails1Component,
    CustomersOrders1Component,
    EditCustomer1Component,
    Header1Component,
    HeaderComponent,
    ParentComponent,
    ChildComponent,
    NewCustomerComponent,
    OnclickcustomerdataComponent,
    Header2Component,
  ],

  imports: [
    BrowserModule,
    NgbModule, HttpClientModule, NgxPaginationModule, GoogleMapsModule,
    AppRoutingModule,
    FontAwesomeModule, ReactiveFormsModule, FormsModule, RouterModule, BrowserAnimationsModule,MatFormFieldModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent],
})
export class AppModule { }
