import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { LoginPageComponent } from './login-page-component/login-page-component.component';
import { NeedAuthGuard } from './need-auth-guard/need-auth-guard.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
{ path:  '', redirectTo:  'login', pathMatch:  'full' },
{
  path: 'login',
  component: LoginPageComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
    path:  'employees',
    component:  EmployeeListComponent,
    canActivate: [NeedAuthGuard]
},
{
    path:  'create-employee',
    component:  EmployeeCreateComponent,
    canActivate: [NeedAuthGuard]

},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
