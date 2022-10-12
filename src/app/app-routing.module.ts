import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { EmployeedataComponent } from './employeedata/employeedata.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { AboutAComponent } from './assignment/about-a/about-a.component';
import { LoginAComponent } from './assignment/login-a/login-a.component';
import { ListView1Component } from './assignment/list-view1/list-view1.component';
import { CardView1Component } from './assignment/card-view1/card-view1.component';
import { MapViewComponent } from './assignment/map-view/map-view.component';
import { Header1Component } from './assignment/header1/header1.component';
import { HeaderComponent } from './assignment/header/header.component';

import { AuthguardGuard } from './assignment/authguard.guard';
import { TogglebarComponent } from './assignment/togglebar/togglebar.component';
import { Togglebar1Component } from './assignment/togglebar1/togglebar1.component';
import { NewCustomerComponent } from './assignment/new-customer/new-customer.component';
import { CustomerOrdersComponent } from './assignment/customer-orders/customer-orders.component';
import { Togglebar2Component } from './assignment/togglebar2/togglebar2.component';
import { SearchComponent } from './assignment/search/search.component';
import { UserComponent } from './assignment/user/user.component';
import { UserlistComponent } from './assignment/userlist/userlist.component';
const routes: Routes = [
  //{ path: '', redirectTo: 'CardView1', pathMatch: 'full' },
  { path: '', redirectTo: '/LoginA', pathMatch: 'full' },
  { path: 'Header1 ', component: Header1Component, canActivate: [AuthguardGuard] },
  { path: 'Assignment1', component: Assignment1Component, canActivate: [AuthguardGuard] },
  { path: 'Employeedata', component: EmployeedataComponent, canActivate: [AuthguardGuard] },
  { path: 'CardView1', component: CardView1Component, canActivate: [AuthguardGuard] },
  { path: 'MapView', component: MapViewComponent, canActivate: [AuthguardGuard] },
  { path: 'AboutA', component: AboutAComponent, canActivate: [AuthguardGuard] },
  { path: 'LoginA', component: LoginAComponent },
  { path: 'Header', component: HeaderComponent, canActivate: [AuthguardGuard] },
  { path: 'ListView1', component: ListView1Component, canActivate: [AuthguardGuard] },
  { path: 'Togglebar/:detail', component: TogglebarComponent, canActivate: [AuthguardGuard] },
  { path: 'Togglebar1/:order', component: Togglebar1Component, canActivate: [AuthguardGuard] },
  { path: 'NewCustomer', component: NewCustomerComponent, canActivate: [AuthguardGuard] },
  { path: 'CustomerOrders', component: CustomerOrdersComponent, canActivate: [AuthguardGuard] },
  { path: 'Togglebar2/:card', component: Togglebar2Component, canActivate: [AuthguardGuard] },
  { path: 'searchuser', component: SearchComponent },
  { path: 'user', component: UserComponent },
  { path: 'userlist', component: UserlistComponent },
  { path: '**', redirectTo: 'CardView1', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }