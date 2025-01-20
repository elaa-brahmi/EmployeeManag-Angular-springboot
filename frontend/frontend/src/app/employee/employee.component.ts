import { Component, OnInit } from '@angular/core';
import { employee } from '../employee.model';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
employee:any;
isCreateEmployee:boolean=true;
  skills:string[]=[];
  constructor( private employeeService: EmployeeService,private router:Router ,private activatedRoute:ActivatedRoute ){}
  ngOnInit(): void {
    //Accessing Resolved Data from employee resolver .ts: In the EmployeeComponent,
    //  the resolved data can be accessed using ActivatedRoute:
    this.employee=this.activatedRoute.snapshot.data['employee'];
    console.log(this.employee);
    if(this.employee && this.employee.employeeId>0){
      this.isCreateEmployee=false;
      if(this.employee.employeeSkills!=''){
        //update the array if skills are present
        this.skills=[];
        this.skills=this.employee.employeeSkills.split(',');
      }
    }
    else{
      this.isCreateEmployee=true;
    }
  }

  saveEmployee(employeeForm:NgForm):void{
    // check if it's put api or post api
    if(this.isCreateEmployee){
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
    })}
    else{
      this.employeeService.update(this.employee).subscribe(
        {
          next:(res:employee)=>{
        this.router.navigate(["/employee-list"]);

          },
          error:(err:HttpErrorResponse)=>{
            console.log(err);
          }
        }
      )

    }
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
