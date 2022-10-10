import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../headerSection/header/header.component';
import { HeaderSectionRoutingModule } from './header-section-routing.module';
import { HomeComponent } from '../headerSection/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule, } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FilterPipe } from '../headerSection/filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { CustomersordersComponent } from '../headerSection/customersorders/customersorders.component';
@NgModule({
  declarations: [HeaderComponent, HomeComponent,FilterPipe,CustomersordersComponent],
  imports: [

    CommonModule,
    HeaderSectionRoutingModule, FontAwesomeModule,
    NgxPaginationModule, BrowserAnimationsModule,
    NgbModule, GoogleMapsModule,
    ReactiveFormsModule, FormsModule, RouterModule,
    BrowserAnimationsModule, MatFormFieldModule,
    MatCommonModule,AppRoutingModule,RouterModule,HttpClientModule
  ]
})
export class HeaderSectionModule { }
