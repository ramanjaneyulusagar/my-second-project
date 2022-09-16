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
import { AboutAComponent } from './assignment/about-a/about-a.component';
import { LoginAComponent } from './assignment/login-a/login-a.component';
import { FilterPipe } from './assignment/filter.pipe';
import { ListView1Component } from './assignment/list-view1/list-view1.component';
import { CardView1Component } from './assignment/card-view1/card-view1.component';
import { MapViewComponent } from './assignment/map-view/map-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomersOrders1Component } from './assignment/new-customer1/adddetails/customers-orders1/customers-orders1.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Header1Component } from './assignment/header1/header1.component';
import { HeaderComponent } from './assignment/header/header.component';
import { ParentComponent } from './parent/child/parent/parent.component';
import { ChildComponent } from './parent/child/child/child.component';
import { AppRoutingModule } from './app-routing.module';
import { OnclickcustomerdataComponent } from './assignment/new-customer1/onclickcustomerdata/onclickcustomerdata.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Header2Component } from './assignment/header2/header2.component';
import { TemplateLoginFormComponent } from './assignment/template-login-form/template-login-form.component';
import { AuthguardGuard } from './assignment/authguard.guard';
//import { AuthserviceService } from './assignment/authservice.service';
//import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    Angular1Component,
    EmployeedataComponent,
    Assignment1Component,
    AboutAComponent,
    LoginAComponent,
    FilterPipe,
    ListView1Component,
    CardView1Component,
    MapViewComponent,
    CustomersOrders1Component,
    Header1Component,
    HeaderComponent,
    ParentComponent,
    ChildComponent,
    OnclickcustomerdataComponent,
    Header2Component,
    TemplateLoginFormComponent,
  ],

  imports: [
    BrowserModule,
    NgbModule, HttpClientModule, NgxPaginationModule, GoogleMapsModule,
    AppRoutingModule,
    FontAwesomeModule, ReactiveFormsModule, FormsModule, RouterModule, BrowserAnimationsModule, MatFormFieldModule,
    //MatSliderModule
  ],
  providers: [FormBuilder,{provide:AuthenticatorAssertionResponse}],
  bootstrap: [AppComponent],
})
export class AppModule { }
