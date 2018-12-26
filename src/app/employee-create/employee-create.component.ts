import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Employee } from '../../models/Employee.model';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  constructor(private apiService: ApiService,private api:LoginService,private router: Router) { }

  ngOnInit() {
  }

  model = new Employee();
  submitted = false;

  onSubmit() { 
    
    this.submitted = true;
    this.createEmployee(this.model);

  }


  createEmployee(employee: Employee){
  
    this.apiService.createEmployee(employee).subscribe((response) => {
      this.router.navigate(['/employees'])
    });
  }

  logOut(){
    this.api.logOut();
  }

}
