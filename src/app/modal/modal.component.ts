import {Component, Input} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Employee } from '../../models/Employee.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: './modal.component.html'
})
export class NgbdModalBasic {

  @Input() childMessage: Employee;
  
  closeResult: string;
  submitted = false;


  constructor(private modalService: NgbModal, private apiService: ApiService) {}

  model = new Employee();

  onSubmit() { 
    
    this.submitted = true;
    this.editEmployee(this.childMessage);

  }

  editEmployee(childMessage){
    return this.apiService.editEmployee(this.childMessage,this.childMessage.id).subscribe((response)=>
    {
      window.location.reload();
    });
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}