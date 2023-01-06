import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {

customerForm = new FormGroup({
  customerName: new FormControl(''),
  contactNumber: new FormControl(''),
  orderDate: new FormControl(''),
  trialDate: new FormControl(''),
  deliveryDate: new FormControl(''),
});


onSubmit() {
  console.log(this.customerForm.value);
  this.customerForm.reset();
}

clearForm() {
  this.customerForm.reset();
}

}
