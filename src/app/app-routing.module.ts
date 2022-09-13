import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { EmployeedataComponent } from './employeedata/employeedata.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { AboutAComponent } from './assignment/about-a/about-a.component';
import { LoginAComponent } from './assignment/login-a/login-a.component';
import { ListView1Component } from './assignment/list-view1/list-view1.component';
import { CardView1Component } from './assignment/card-view1/card-view1.component';
import { MapViewComponent } from './assignment/map-view/map-view.component';
import { CustomersOrders1Component } from './assignment/new-customer1/adddetails/customers-orders1/customers-orders1.component';
import { Header1Component } from './assignment/header1/header1.component';
import { HeaderComponent } from './assignment/header/header.component';
import { ParentComponent } from './parent/child/parent/parent.component';
import { ChildComponent } from './parent/child/child/child.component';
import { OnclickcustomerdataComponent } from './assignment/new-customer1/onclickcustomerdata/onclickcustomerdata.component';

const routes: Routes = [
 { path: '', redirectTo: 'CardView1', pathMatch: 'full' },
  { path: 'Assignment1', component: Assignment1Component },
  { path: 'Employeedata', component: EmployeedataComponent },
  { path: 'CardView1', component: CardView1Component },
  { path: 'MapView', component: MapViewComponent },
  { path: 'AboutA', component: AboutAComponent },
  { path: 'LoginA', component: LoginAComponent },
  { path: 'CustomersOrders1', component: CustomersOrders1Component },
  { path: 'Header1 ', component: Header1Component, },
  { path: 'Header', component: HeaderComponent },
  { path: 'Parent', component: ParentComponent, },
  { path: 'Child', component: ChildComponent },
  { path: 'ListView1', component: ListView1Component },
  { path: 'Onclickcustomerdata', component: OnclickcustomerdataComponent,

 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }