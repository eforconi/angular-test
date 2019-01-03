import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from '../services/login.service';
import { ModalService } from '../services/modal.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page-component.component.html',
  styleUrls: ['./login-page-component.component.css']
})
export class LoginPageComponent implements OnInit {
  user = '';
  password = '';

  constructor(private api: LoginService,  private router: Router,private modalService: ModalService) {
  }


  
    ngOnInit() {
    }

    openModal(id: string) {
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }

  tryLogin() {
    this.api.login().subscribe(
        r => {
          for(let user of r){

            if(this.user === user.username && this.password === user.password){
              this.api.setUser(user);
              this.router.navigateByUrl('/employees');
            }
          }
        },
        r => {
          alert(r.error.error);
        });
  }

  logOut(){
    this.api.logOut();
  }

 
}