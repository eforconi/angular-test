import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Employee } from '../../models/Employee.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL  =  'http://localhost:3000';
  constructor(private  httpClient:  HttpClient) { }

  private modals: any[] = [];


  getEmployees(){
    return  this.httpClient.get(`${this.API_URL}/employees`);
  }

  createEmployee(employee) {
    return  this.httpClient.post(`${this.API_URL}/employees/`,employee);
  }

  deleteEmployee(employeeId){
    return this.httpClient.delete(`${this.API_URL}/employees/`+employeeId);
  }

  editEmployee(employee,employeeId){
    console.log("service",employee);
    return this.httpClient.put(`${this.API_URL}/employees/`+employeeId,employee);
  }

}
