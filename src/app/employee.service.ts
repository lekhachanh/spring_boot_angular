import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Employee} from './employee';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getDetail(id: number): Observable<Employee> {
    const url = `${this.baseUrl}/employee/${id}`;
    return this.http.get<Employee>(url);
  }

  createEmployee(employee: Employee) {
    const url = `${this.baseUrl}/employee`;
    return this.http.post(url, employee);
  }

  edit(id: number , employee: Employee): Observable<Employee> {
    const url = this.baseUrl + '/employee/' + id;
    return this.http.put<Employee>(url, employee);
  }

  delete(id: number) {
    const url = this.baseUrl + '/employee/' + id;
    return this.http.delete(url);
  }
  getEmployeesList(): Observable<Employee[]> {
    const url = `${this.baseUrl}/employees`;
    return this.http.get<Employee[]>(url);
  }
}
