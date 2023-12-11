import { Component } from '@angular/core';
import { FormArray, FormControl, FormControlName, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  public form:any = []

  constructor(private _employeeService:EmployeeService){

  _employeeService.getEmployees().subscribe(
    (data:any)=>{
      this.form = data;
    },
    (err:any)=>{
     alert("error")
    }
  )
  }


  public employeeForm: FormGroup = new FormGroup({
    name: new FormControl(null,[ Validators.required]),
    company: new FormControl(),
    role: new FormControl(null,[Validators.required]),
    email: new FormControl(null,[ Validators.email, Validators.required]),
    package:new FormControl(null,[ Validators.required]),
    dob: new FormControl(),
    address: new FormGroup({
      addresLine: new FormControl(null, [Validators.required]),
      city: new FormControl(null,[Validators.required]),
      state: new FormControl(null,[Validators.required]),
      pincode: new FormControl(null,[Validators.required, Validators.min(100000), Validators.max(999999)] ),

    }),
   
    hikes: new FormArray([]),
    workMode: new FormControl(null,[Validators.required]),
    travelBill: new FormControl(null,[Validators.required]),
    wifiBill: new FormControl(null,[Validators.required]),

  })

  get salaryHikeFormArray(){
    return this.employeeForm.get("hikes") as FormArray;
  }

  salaryHikes(){
    this.salaryHikeFormArray.push(
      new FormGroup(
      {
       year: new FormControl(null,[Validators.required]),
       percentage: new FormControl(null,[Validators.required]),

    })
    )
  }

  delete(i:number){
    this.salaryHikeFormArray.removeAt(i)
  }

  submit(){
  this._employeeService.createEmployees(this.employeeForm.value).subscribe(
    (data:any)=>{
      alert("created succsesfully");
    },
    (err:any)=>{
      alert("Server Error");

    }
  )



  }


}
