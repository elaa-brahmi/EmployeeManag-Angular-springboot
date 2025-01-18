import { Component, OnInit } from '@angular/core';
import { employee } from '../employee.model';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee:employee={
    employeeId:0,
    employeeName:'',
    employeeAddress:'',
    employeeContactNumber:'',
    employeeDepartment:'',
    employeeGender:'',
    employeeSkills:''
  };
  constructor(){}
  ngOnInit(): void {
  }
}
