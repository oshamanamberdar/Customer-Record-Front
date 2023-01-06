import { Component } from '@angular/core';
import {Customer} from "../customer/customer";
import {CustomerService} from "../customer.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent {
  customerId: any

  constructor(private customerService: CustomerService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerId = this.route.snapshot.paramMap.get('id');
    this.getCustomerData();
  }


  getCustomerData() {
    this.customerId = this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomerById(this.customerId).subscribe(response => {
      console.log(response, 'customer print')
    })
  }
}
