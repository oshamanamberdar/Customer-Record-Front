import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../customer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../customer/customer";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent {

  customer: Customer = new Customer();
  customerForm : FormGroup = new FormGroup({});
  constructor(private  customerService: CustomerService,
              private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {
  }


  balanceAmount: number | undefined
  sLength: number | undefined
  sChest: number | undefined
  sWaist: number | undefined
  sHip: number | undefined
  sShoulder: number | undefined
  sSleeveLength: number | undefined
  sNeck: number | undefined
  customerId: any

  ngOnInit(): void {
    this.customerId = this.route.snapshot.paramMap.get('id');
    this.formMaker();
    this.customerService.getCustomerById(this.customerId).subscribe(response => {
      this.customerForm = new FormGroup({
        id: new FormControl(response['id']),
        customerName: new FormControl(response['customerName'], Validators.required),
        contactNumber: new FormControl(response['contactNumber'], Validators.required),
        orderDate: new FormControl(response['orderDate'], Validators.required),
        trialDate: new FormControl(response['trialDate'], Validators.required),
        deliveryDate: new FormControl(response['deliveryDate'], Validators.required),
        coatLength: new FormControl(response['coatLength']),
        coatChest: new FormControl(response['coatChest']),
        coatWaist: new FormControl(response['coatWaist']),
        coatHip: new FormControl(response['coatHip']),
        coatShoulder: new FormControl(response['coatShoulder']),
        coatSleeveLength: new FormControl(response['coatSleeveLength']),
        coatHalfBack: new FormControl(response['coatHalfBack']),
        coatNeck: new FormControl(response['coatNeck']),
        pantLength: new FormControl(response['pantLength']),
        pantWaist: new FormControl(response['pantWaist']),
        pantHip: new FormControl(response['pantHip']),
        pantThigh: new FormControl(response['pantThigh']),
        pantKnee: new FormControl(response['pantKnee']),
        pantBottom: new FormControl(response['pantBottom']),
        pantCrouch: new FormControl(response['pantCrouch']),
        shirtLength: new FormControl(response['shirtLength']),
        shirtChest: new FormControl(response['shirtChest']),
        shirtWaist: new FormControl(response['shirtWaist']),
        shirtHip: new FormControl(response['shirtHip']),
        shirtShoulder: new FormControl(response['shirtShoulder']),
        shirtSleeveLength: new FormControl(response['shirtSleeveLength']),
        shirtNeck: new FormControl(response['shirtNeck']),
        note: new FormControl(response['note']),
        particular: new FormControl(response['particular'], Validators.required),
        totalAmount: new FormControl(response['totalAmount'], Validators.required),
        advanceAmount: new FormControl(response['advanceAmount'], Validators.required),
        balanceAmount: new FormControl(response['balanceAmount']),
        statusOfBalance: new FormControl(response['statusOfBalance'], Validators.required),
        statusOfProduct: new FormControl(response['statusOfProduct'], Validators.required),

      })
    })
  }


  clearForm() {
    this.customerForm.reset();
  }

  formMaker() {
    this.customerForm = this.formBuilder.group( {
      id:[undefined],
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

  update() {
    if(this.customerForm.valid){
      this.customerId = this.route.snapshot.paramMap.get('id');
      this.customerService.updateCustomerById(this.customerId, this.customerForm.value).subscribe(response => {
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

  get customerFormControl() {
    return this.customerForm.controls;
  }

}
