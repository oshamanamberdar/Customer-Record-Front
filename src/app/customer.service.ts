import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environment/environment";
import {Observable} from "rxjs";
import {Customer} from "./customer/customer";
import {CustomerComponent} from "./customer/customer.component";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  private apiServerUrl = environment.apiBaseUrl;

  public getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiServerUrl}/customer/all`)
  }
  public addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.apiServerUrl}/customer/save`, customer)
  }

  public getCustomerById(customerId: any): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/customer/${customerId}`)

  }

  public updateCustomerById(customerId:any, customer: Customer):Observable<Customer> {
    return this.http.put<Customer>(`${this.apiServerUrl}/customer/update/${customerId}`, customer)
  }

  public deleteCustomerById(customerId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/customer/delete/${customerId}`)
  }
}
