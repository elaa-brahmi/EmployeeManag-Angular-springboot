import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employee } from './employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }
  api="http://localhost:8080/api"
// we will have CORS error because the ports of the api and the url are not the same
  public saveEmployee(employee: employee): Observable<employee>{
   return  this.httpClient.post<employee>(`${this.api}/save/employees`,employee);
  }
  public getEmployeeById(id:number):Observable<employee>{
    return this.httpClient.get<employee>(`${this.api}/get/employee/${id}`);
  }
  public getEmployees():Observable<employee[]>{
    return this.httpClient.get<employee []>(`${this.api}/get/employees`);

  }
  public deleteById(id:number){
    return  this.httpClient.delete(`${this.api}/delete/employee/${id}`);
  }
  public update(employee:employee){
    return this.httpClient.put<employee>(`${this.api}/update/employee`,employee);

  }
}
