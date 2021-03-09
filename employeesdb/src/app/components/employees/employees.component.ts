import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../../services/employee.service';
import { Employee } from './../../Employee';



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {

  employees: Employee[];
  totalEmployees: number;
  totalSalary: number;

  userList: Employee[];
  keyList: string[];

  constructor(public employeeService: EmployeeService) {

  }
  ngOnInit(): void {
    this.employeeService.getEmployees().snapshotChanges().forEach(employees => {
      this.employees = [];
      employees.forEach(employee => {
        let emp = employee.payload.toJSON();
        emp['$key'] = employee.key;
        this.employees.push(emp as Employee);
        this.getTotalEmployees();
      });
    });
  }
  
  getTotalEmployees() {
    let total = 0;
    let totalSalary = 0;
    for (let index = 0; index < this.employees.length; index++) {
      total += 1;
      totalSalary += parseFloat(this.employees[index].salary.toString());
    }
    this.totalEmployees = total;
    this.totalSalary = totalSalary;
    //console.log("Total Employees = "+this.totalEmployees);
    //console.log("Total Salary = "+totalSalary);
  }
  /*
  getUsers() {
    this.employeeService.getEmployees().snapshotChanges().forEach(usersSnap => {
     // this.userList = [];
      this.keyList = [];
      usersSnap.forEach(userSnap => {
        let user = userSnap.payload.toJSON();
       // user['$key'] = userSnap.key;
        this.keyList.push(userSnap.key);
       // this.userList.push(user as Employee);
        console.log(this.keyList);
      });
    });
  }*/
}
