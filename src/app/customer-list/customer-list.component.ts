import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent {

  constructor(private router: Router) {
  }

  addCustomer() {
    this.router.navigate(['add-customer'])
  }

}
