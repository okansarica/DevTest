import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CustomerService} from '../services/customer.service';
import {CustomerModel} from '../models/customer.model';
import {CustomerType} from '../models/enums/customer-type.enum';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  private customerId: number;

  public customer: CustomerModel;
  CustomerType = CustomerType;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService) {
    this.customerId = route.snapshot.params.id;
  }

  ngOnInit() {
    this.customerService.getCustomer(this.customerId).subscribe(customer => this.customer = customer);
  }

}
