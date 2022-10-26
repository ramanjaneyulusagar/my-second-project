import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { EmployeedataComponent } from './employeedata/employeedata.component';
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
import { AppComponent } from './app.component';
const routes: Routes = [
  { path: '', component: LoginAComponent },
  {path:'app',component:AppComponent},
  {
    path: 'Header1', component: Header1Component, canActivate: [AuthguardGuard], children: [
      { path: 'ListView1', component: ListView1Component },
      { path: 'CardView1', component: CardView1Component, },
      { path: 'MapView', component: MapViewComponent, },
      { path: 'NewCustomer', component: NewCustomerComponent, },
    ]
  },
  { path: 'Employeedata', component: EmployeedataComponent, canActivate: [AuthguardGuard] },


  { path: 'AboutA', component: AboutAComponent, canActivate: [AuthguardGuard] },
  { path: 'Header', component: HeaderComponent, canActivate: [AuthguardGuard] },

  { path: 'Togglebar/:detail', component: TogglebarComponent, canActivate: [AuthguardGuard] },
  { path: 'Togglebar1/:order', component: Togglebar1Component, canActivate: [AuthguardGuard] },

  { path: 'CustomerOrders', component: CustomerOrdersComponent, canActivate: [AuthguardGuard] },
  { path: 'Togglebar2/:card', component: Togglebar2Component, canActivate: [AuthguardGuard] },
  { path: '**', redirectTo: 'Header1/ListView1', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }