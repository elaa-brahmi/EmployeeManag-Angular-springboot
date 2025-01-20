package com.example.projectSpringAngular.Controller;

import com.example.projectSpringAngular.Service.EmployeeService;
import com.example.projectSpringAngular.model.Employee;
import com.example.projectSpringAngular.dao.EmployeeDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")


@RequestMapping("/api/")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;
    @PostMapping("/save/employees")
    public Employee saveEmployee(@RequestBody Employee employee){
        return employeeService.saveEmployee(employee);
    }
    //get all employees
    @GetMapping("/get/employees")
    public List<Employee> getAllEmployees(){
       return employeeService.getEmployees();

    }

    @GetMapping("/get/employee/{id}")
    public Employee getEmployee(@PathVariable int id){
        return employeeService.getEmployee(id);
    }
    @DeleteMapping("/delete/employee/{id}")
    public void deleteEmployee(@PathVariable int id){
        employeeService.deleteEmployee(id);
    }
    @PutMapping("/update/employee")
    public Employee updateEmployee(@RequestBody Employee employee) {
        return employeeService.updateEmployee(employee);
    }

}
