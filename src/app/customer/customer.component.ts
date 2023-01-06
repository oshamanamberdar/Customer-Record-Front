import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../customer.service";
import {Customer} from "./customer";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {
  customer: Customer = new Customer();
  customerForm : FormGroup = new FormGroup({});
  constructor(private  customerService: CustomerService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  balanceAmount: number | undefined
  sLength: number | undefined
  sChest: number | undefined
  sWaist: number | undefined
  sHip: number | undefined
  sShoulder: number | undefined
  sSleeveLength: number | undefined
  sNeck: number | undefined

  ngOnInit(): void {
    this.formMaker();
  }


clearForm() {
this.customerForm.reset();
}

formMaker() {
    this.customerForm = this.formBuilder.group( {
      customerName: [undefined, Validators.required],
      contactNumber: [undefined, Validators.required],
      orderDate:[undefined, Validators.required],
      trialDate:[undefined, Validators.required],
      deliveryDate: [undefined, Validators.required],
      coatLength:[undefined],
      coatChest:[undefined],
      coatWaist:[undefined],
      coatHip:[undefined],
      coatShoulder:[undefined],
      coatSleeveLength:[undefined],
      coatHalfBack:[undefined],
      coatNeck:[undefined],
      pantLength:[undefined],
      pantWaist:[undefined],
      pantHip:[undefined],
      pantThigh:[undefined],
      pantKnee:[undefined],
      pantBottom:[undefined],
      pantCrouch:[undefined],
      shirtLength:[undefined],
      shirtChest:[undefined],
      shirtWaist:[undefined],
      shirtHip:[undefined],
      shirtShoulder:[undefined],
      shirtSleeveLength:[undefined],
      shirtNeck:[undefined],
      note:[undefined],
      particular:[undefined, Validators.required],
      totalAmount:[undefined, Validators.required],
      advanceAmount:[undefined, Validators.required],
      balanceAmount:[undefined],
      statusOfBalance:[undefined, Validators.required],
      statusOfProduct:[undefined, Validators.required],

    })
}

save() {
    if(this.customerForm.valid){
      this.customerService.addCustomer(this.customerForm.value).subscribe(response => {
        this.router.navigate(['customer-list'])
      });
    }
}


backToCustomerList() {
    this.router.navigate(['/customer-list'])
}

calculate() {
    this.balanceAmount = this.customerForm.get('totalAmount')?.value - this.customerForm.get('advanceAmount')?.value;
}

getValue() {
    this.sLength = this.customerForm.get('coatLength')?.value
    this.sChest = this.customerForm.get('coatChest')?.value
    this.sWaist = this.customerForm.get('coatWaist')?.value
    this.sHip = this.customerForm.get('coatHip')?.value
    this.sShoulder = this.customerForm.get('coatShoulder')?.value
    this.sSleeveLength = Number(this.customerForm.get('coatSleeveLength')?.value) + 1
    this.sNeck = this.customerForm.get('coatNeck')?.value
    console.log(this.sNeck)

}
}
