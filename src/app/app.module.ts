import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { ApiService } from './services/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { LoginService } from './services/login.service';
import { LoginPageComponent } from './login-page-component/login-page-component.component';
import { NeedAuthGuard } from './need-auth-guard/need-auth-guard.component';
import { ModalService } from './services/modal.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalBasic } from './modal/modal.component';
import { RegisterComponent } from './register/register.component';
import { AlertService } from './services/alert.service';
import { EmployeeDepartmentFilterPipe } from './employee-department-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeCreateComponent,
    LoginPageComponent,
    NgbdModalBasic,
    RegisterComponent,
    EmployeeDepartmentFilterPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [ApiService,LoginService,NeedAuthGuard,ModalService,AlertService],
  bootstrap: [AppComponent]
})
export class AppModule {}
