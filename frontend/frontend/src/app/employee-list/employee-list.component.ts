import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { employee } from '../employee.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  dateSource:employee[]=[];
  displayedColumns: string[] = ['employeeId', 'employeeName', 'employeeContactNumber', 'employeeAddress','employeeGender','employeeDepartment','employeeSkills','delete'];
constructor( private employeeService:EmployeeService ){
  this.getEmployeeList();
}
ngOnInit(): void {

}
deleteById(employeeId:number):void{
  console.log(employeeId);
   this.employeeService.deleteById(employeeId).subscribe(
    {
      next:(res)=>{
        console.log(res);
        this.getEmployeeList();
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
    }
  );
}
getEmployeeList():void{
  this.employeeService.getEmployees().subscribe({
    next:(res:employee[])=>{
      console.log(res);
      this.dateSource=res;
    },
    error:(err:HttpErrorResponse)=>{
      console.log(err);
    }
  });
}
}
