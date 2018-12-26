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

  private bodyText: string;

  
    ngOnInit() {
        this.bodyText = 'This text can be updated in modal 1';
    }

    openModal(id: string) {
      console.log("id:", id);
      console.log("modal: ", this.modalService);
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }

  tryLogin() {
    this.api.login().subscribe(
        r => {
          console.log(r);
          for(let user of r){
            console.log("user: ",user.username);
            console.log("pasw: ",user.password);

            console.log("page user: ",this.user);
            console.log("page pasw: ",this.password);

            if(this.user === user.username && this.password==user.password){
              this.api.setUser(user);
              console.log("Paso, user: ", user);
              console.log(this.router);
              this.router.navigateByUrl('/employees');
            }
          }
          // if (r.token) {
          //   this.api.setToken(r.token);
          //   this.router.navigateByUrl('/employees');
          // }
        },
        r => {
          alert(r.error.error);
        });
  }

  logOut(){
    console.log('log: ',this.api.isLogged() );
    this.api.logOut();
    // this.router.navigateByUrl('/login');
    console.log('log: ',this.api.isLogged() );
  }

 
}
//-----------------------------
// import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { first } from 'rxjs/operators';
// import { LoginService } from '../services/login.service';
// import { AlertService } from '../services/alert.service';


// @Component({templateUrl: 'login-page-component.component.html'})
// export class LoginPageComponent implements OnInit {
//     loginForm: FormGroup;
//     loading = false;
//     submitted = false;
//     returnUrl: string;

//     constructor(
//         private formBuilder: FormBuilder,
//         private route: ActivatedRoute,
//         private router: Router,
//         private api: LoginService,
//         private alertService: AlertService) {}

//     ngOnInit() {
//         this.loginForm = this.formBuilder.group({
//             username: ['', Validators.required],
//             password: ['', Validators.required]
//         });

//         // reset login status
//         this.api.logOut();

//         // get return url from route parameters or default to '/'
//         this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
//     }

//     // convenience getter for easy access to form fields
//     get f() { return this.loginForm.controls; }

//     onSubmit() {
//         this.submitted = true;
//         console.log("log",this.f.username.value, this.f.password.value);
//         // stop here if form is invalid
//         if (this.loginForm.invalid) {
//             return;
//         }

//         this.loading = true;
//         this.api.login()
//             .pipe(first())
//             .subscribe(
//                 data => {
//                     for(let user of data){
//                       console.log("user: ",user.username);
//                       console.log("pasw: ",user.password);
//                       console.log("page user: ",this.f.username.value);
//                       console.log("page pasw: ",this.f.password.value);
//                         if(this.f.username.value === user.username && this.f.password.value==user.password){
//                             this.api.setUser(user);
//                             console.log("Paso, user: ", user);
//                             console.log(this.router);
//                             this.router.navigateByUrl('/employees');
//                          }
//                         else
//                          if(Object.keys(data).length -1){
//                           this.router.navigateByUrl('/login');
//                          }
//                     }
//                     this.router.navigate([this.returnUrl]);
//                 },
//                 error => {
//                     this.alertService.error(error);
//                     this.loading = false;
//                 });
//     }
// }
