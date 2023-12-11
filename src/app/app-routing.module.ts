import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { AuthenticationGuard } from './authentication.guard';
import { NotifyGuard } from './notify.guard';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'employees',component:EmployeesComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard', canActivate:[AuthenticationGuard], component:DashboardComponent, children:[
  {path:'home',component:HomeComponent},
  {path:'create-employee', canDeactivate:[NotifyGuard],component:CreateEmployeeComponent},


  ]},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
