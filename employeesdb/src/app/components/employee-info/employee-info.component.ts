import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Employee } from './../../Employee';
import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {

  id: string;
  employee: Employee = {
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    city: "",
    phone: 0,
    salary: 0,
  }
  hasSalary: boolean = false;
  updateSalaryInput: boolean = false;
  showSalaryUpdate: boolean = false;

  constructor(public employeeService: EmployeeService, public router: Router,
    public activatedRoute: ActivatedRoute, public flashMessagesModule: FlashMessagesService) {
  }
  /*
    ngOnInit(): void {
      this.employee;
      this.id = this.activatedRoute.snapshot.params['id'];
      this.employeeService.getEmployee(this.id).valueChanges().subscribe(emp => {
        if (emp.salary > 0) {
          this.hasSalary = true;
        } else {
          this.hasSalary = false;
        }
        this.employee = emp;
      });
    }
    */
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.employeeService.getEmployee(this.id).valueChanges().subscribe(emp => {
      if (emp.salary > 0) {
        this.hasSalary = true;
      } else {
        this.hasSalary = false;
      }
      this.employee = emp;
    });
  }
  updateSalaryEmployee(id: string) {
    this.employeeService.updateEmployee(this.id, this.employee);
    this.flashMessagesModule.show("Salary updated successfully! ", { cssClass: 'alert-success', timeout: 3000 });
    this.router.navigate(['/employee/' + this.id]);
  }
  deleteEmployee() {
    if(confirm("Are you sure!")){
      this.employeeService.deleteEmployee(this.id);
      this.flashMessagesModule.show("Employee Deleted successfully! ", { cssClass: 'alert-danger', timeout: 3000 });
    this.router.navigate(['/']);
    }
  }
}
