import { Component, OnInit } from '@angular/core';
import { employee } from '../employee.model';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee:employee={
    employeeId:null,
    employeeName:'',
    employeeAddress:'',
    employeeContactNumber:'',
    employeeDepartment:'',
    employeeGender:'',
    employeeSkills:''
  };
  skills:string[]=[];
  constructor( private employeeService: EmployeeService,private router:Router){}
  ngOnInit(): void {
  }

  saveEmployee(employeeForm:NgForm):void{
    this.employeeService.saveEmployee(this.employee).subscribe({
      next:(res:employee)=>{ // callback for success function
        console.log(res);
        employeeForm.reset();
        this.skills=[];
        this.employee.employeeSkills='';
        this.employee.employeeGender='';
        this.router.navigate(["/employee-list"]);

      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
    })
  }
  selectGender(gender:string):void{
    this.employee.employeeGender=gender;
  }
  onSkillschanges(event: any):void{
    console.log(event);
    if(event.checked){
      this.skills.push(event.source.value);
    }
    else{
      this.skills.forEach(
        (item,index)=>{
          if(item==event.source.value) this.skills.splice(index,1);
        }
      )


    }
    this.employee.employeeSkills=this.skills.toString();
  }

}
