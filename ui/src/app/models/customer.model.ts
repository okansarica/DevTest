import {CustomerType} from './enums/customer-type.enum';

export class CustomerModel {
  customerId: number;
  name: string;
  type: CustomerType;
}
