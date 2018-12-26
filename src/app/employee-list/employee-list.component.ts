import { Component, OnInit, Pipe } from '@angular/core';
import { ApiService } from '../services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient} from  '@angular/common/http';
import { Employee } from '../../models/Employee.model';
import { LoginService } from '../services/login.service';
import { EmployeeDepartmentFilterPipe } from '../employee-department-filter.pipe';
import { ModalService } from '../services/modal.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})


@Pipe({ name: 'EmployeeDepartmentFilterPipe' })
export class EmployeeListComponent implements OnInit {
    employees:  Employee[];
    private department: string;
    closeResult: string;
    model = new Employee();



  constructor(private  apiService:  ApiService, private api: LoginService,
    private modalService: ModalService) {  
    this.employees = [];

  }
  private bodyText: string;

  
    ngOnInit() {
      this.getEmployees();
    }



  public  getEmployees(){
    this.apiService.getEmployees().subscribe((employees:  Employee[]) => {
        this.employees  =  employees;
        console.log(employees);
    });
  }

  logOut(){
    console.log('log: ',this.api.isLogged() );
    this.api.logOut();
    console.log('log: ',this.api.isLogged() );
  }

  public deleteEmployee(employee){

  console.log('log: ',employee );
  this.apiService.deleteEmployee(employee.id).subscribe((response)=> {
    console.log(response);
    window.location.reload();
    });
  }  

}
