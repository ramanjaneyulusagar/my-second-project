import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../headerSection/header/header.component';
import { HomeComponent } from '../headerSection/home/home.component';
import { CustomersordersComponent } from '../headerSection/customersorders/customersorders.component';
const routes: Routes = [
  {
    path: 'headerSection/header', component: HeaderComponent,
  },
  { path: 'headerSection/home', component: HomeComponent },
  { path: 'headerSection/Customerorders', component: CustomersordersComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderSectionRoutingModule { }
