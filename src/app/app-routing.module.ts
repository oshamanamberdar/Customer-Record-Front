import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerComponent} from "./customer/customer.component";
import {CustomerListComponent} from "./customer-list/customer-list.component";
import {UpdateCustomerComponent} from "./update-customer/update-customer.component";
import {PrintComponent} from "./print/print.component";

const routes: Routes = [
  {path: 'add-customer', component: CustomerComponent},
  {path: 'customer-list', component: CustomerListComponent},
  {path: '',redirectTo:'/customer-list', pathMatch:'full'},
  {path:'customer-list/update-customer/:id', component: UpdateCustomerComponent},
  {path: 'customer-list/print/:id', component:PrintComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
