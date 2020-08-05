import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerModel} from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {
  }

  public createCustomer(customer: CustomerModel): Observable<CustomerModel> {
    // TODO the api url should be reached from a shared place, for now I am only developing the same way like in other classes
    return this.httpClient.post<CustomerModel>('http://localhost:63235/customer', customer);
  }

  public getCustomer(id: number): Observable<CustomerModel> {
    return this.httpClient.get<CustomerModel>(`http://localhost:63235/customer/${id}`);
  }

  public getCustomers(): Observable<CustomerModel[]> {
    return this.httpClient.get<CustomerModel[]>('http://localhost:63235/customer');
  }
}
