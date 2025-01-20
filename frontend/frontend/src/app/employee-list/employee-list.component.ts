import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { employee } from '../employee.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  dateSource:employee[]=[];
  displayedColumns: string[] = ['employeeId', 'employeeName', 'employeeContactNumber', 'employeeAddress','employeeGender','employeeDepartment','employeeSkills','delete'];
constructor( private employeeService:EmployeeService,private router:Router ){
  this.getEmployeeList();
}
ngOnInit(): void {

}
update(employeeId:number):void{
  this.router.navigate(['/employee',{employeeId:employeeId}]);

}
getEmployeeById(employeeId:number):Observable<employee>{
  return this.employeeService.getEmployeeById(employeeId);
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
