import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../services/customer.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerModel} from '../models/customer.model';
import {CustomerType} from '../models/enums/customer-type.enum';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customers: CustomerModel[] = [];
  formGroup: FormGroup;
  CustomerType = CustomerType;

  constructor(private customerService: CustomerService, private formBuilder: FormBuilder) {
    this.createFormGroup();
  }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(customers => {
      this.customers = customers;
    }, error => {
      // TODO we need to handle the exceptions in a global place and give the alert to the end user
      console.log(error);
      alert('An error occured');
    });
  }

  createFormGroup() {
    this.formGroup = this.formBuilder.group({
      name: [null, [Validators.required, Validators.maxLength(5)]],
      type: [null, Validators.required]
    });
  }

  save() {
    if (!this.formGroup.valid) {
      return;
    }
    const customer = new CustomerModel();
    customer.name = this.formGroup.controls.name.value;
    customer.type = +this.formGroup.controls.type.value;
    this.customerService.createCustomer(customer).subscribe(customerResult => {
      this.customers.push(customerResult);
    }, error => {
      // TODO we need to handle the exceptions in a global place and give the alert to the end user
      console.log(error);
      alert('An error occured');
    });
  }
}
