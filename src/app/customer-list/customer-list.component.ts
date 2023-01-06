import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {CustomerService} from "../customer.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent {

  constructor(private router: Router,
              private customerService: CustomerService) {
  }

  p: number = 1;

  customerList: any
  term: any
  displayStyle = "none";
  ngOnInit(): void {
    this.getCustomerDetail();
  }

  addCustomer() {
    this.router.navigate(['add-customer'])
  }

  getCustomerDetail() {
    this.customerService.getCustomers().subscribe(response =>{
      this.customerList = response;

    })
  }

  routeToUpdateCustomer(id: number) {
    this.router.navigate([`customer-list/update-customer/${id}`])
  }

  routeToPrint(id: number) {
    this.router.navigate([`customer-list/print/${id}`])
  }

  deleteCustomerById(id: number) {
    this.customerService.deleteCustomerById(id).subscribe(response => {
      this.getCustomerDetail();
      this.closePopup();
    })
  }



  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }


}
