import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {

  public employees:any = [];
  public limit:string = '';
  public pageNo:string = '';
  public order:any = '';
  public column:string = '';
  public term:string = '';

  constructor(private _employeeService:EmployeeService){
     _employeeService.getEmployees().subscribe(
      (data:any)=>{
        this.employees = data;
      },
      (err:any)=>{
        alert("internal Server Error")
      }
     )
  }

  search(){
    this._employeeService.getFilterEmployees(this.term).subscribe(
      (data:any)=>{
        this.employees = data;
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }

  page(){
    this._employeeService.getPages(this.pageNo).subscribe(
      (data:any)=>{
        this.employees = data;
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }

  sort(){
    this._employeeService.sortedEmployees(this.column, this.order).subscribe(
      (data:any)=>{
        this.employees = data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

  delete(id:string){
    this._employeeService.deleteEmployees(id).subscribe(
       (data:any)=>{
        alert("deleted succesfully");
        location.reload()
       },
       (err:any)=>{
        alert("Internal Server Error");

       }
    )
  }


  submite(){
    this._employeeService.createEmployees(this.employees.value).subscribe(
      (data:any)=>{
        alert("created successfully");
      },
      (err:any)=>{
        alert("Internal Server error");
        
      }

    )
}
}
