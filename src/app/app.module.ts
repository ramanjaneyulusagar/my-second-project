import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeedataComponent } from './employeedata/employeedata.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutAComponent } from './assignment/about-a/about-a.component';
import { LoginAComponent } from './assignment/login-a/login-a.component';
import { FilterPipe } from './assignment/filter.pipe';
import { ListView1Component } from './assignment/list-view1/list-view1.component';
import { CardView1Component } from './assignment/card-view1/card-view1.component';
import { MapViewComponent } from './assignment/map-view/map-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { Header1Component } from './assignment/header1/header1.component';
import { HeaderComponent } from './assignment/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthguardGuard } from './assignment/authguard.guard';
import { TogglebarComponent } from './assignment/togglebar/togglebar.component';
import { Togglebar1Component } from './assignment/togglebar1/togglebar1.component';
import { NewCustomerComponent } from './assignment/new-customer/new-customer.component';
import { AuthserviceService } from './assignment/authservice.service';
import { MatSliderModule } from '@angular/material/slider';
import { MatCommonModule } from '@angular/material/core';
import { CustomerOrdersComponent } from './assignment/customer-orders/customer-orders.component';
import { customer } from './assignment/customerdata1';
import { Togglebar2Component } from './assignment/togglebar2/togglebar2.component';
import * as xlsx from 'xlsx';
import { Filter2Pipe } from './assignment/filter2.pipe'
import jspdf from 'jspdf'
import { NgxPrintModule } from 'ngx-print';
import { Filter1Pipe } from './assignment/filter1.pipe';
import { MaterialModule } from './material/material.module';
import { AngularFileUploaderModule } from '@anderstornkvist/angular-file-uploader';

@NgModule({
  declarations: [
    AppComponent,
    EmployeedataComponent,
    AboutAComponent,
    LoginAComponent,
    FilterPipe,
    ListView1Component,
    CardView1Component,
    MapViewComponent,
    Header1Component,
    HeaderComponent,
    TogglebarComponent,
    Togglebar1Component,
    NewCustomerComponent,
    CustomerOrdersComponent,
    Togglebar2Component,
    Filter2Pipe,
    Filter1Pipe,
 
    
  ],

  imports: [
    BrowserModule,AngularFileUploaderModule,
    NgbModule, HttpClientModule, NgxPaginationModule, GoogleMapsModule,
    AppRoutingModule,
    FontAwesomeModule, ReactiveFormsModule, FormsModule, RouterModule, BrowserAnimationsModule, MatFormFieldModule, MatCommonModule
    // MatSliderModule
    ,NgxPrintModule,MaterialModule,
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent],
})
export class AppModule { }
