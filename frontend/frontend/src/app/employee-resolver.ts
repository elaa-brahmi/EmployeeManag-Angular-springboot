import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { EmployeeService } from "./employee.service";
import { Observable, of } from "rxjs";
import { inject } from "@angular/core";
import { employee } from "./employee.model";
//Pre-fetches employee data before the target route is activated.
//This is a generic type that defines a resolver function.
export const EmployeeResolver:ResolveFn<any>=
//ActivatedRouteSnapshot : Represents the snapshot of the current route.
//state: Represents the overall state of the router at a moment in time.
(route:ActivatedRouteSnapshot,state:RouterStateSnapshot,employeeService:EmployeeService=inject(EmployeeService)) : Observable<employee>=>{
  const employeeId=route.paramMap.get("employeeId");
  if(employeeId){
    //make api call get data for givin employee
    return employeeService.getEmployeeById(Number(employeeId));
  }
  else{
    //create and return empty employee details
    const employee:employee={
        employeeId:null,
        employeeName:'',
        employeeAddress:'',
        employeeContactNumber:'',
        employeeDepartment:'',
        employeeGender:'',
        employeeSkills:''
      }
      return of(employee);
  }
}

