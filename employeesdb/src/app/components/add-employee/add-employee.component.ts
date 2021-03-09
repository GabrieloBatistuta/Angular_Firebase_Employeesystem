import { SettingsService } from './../../services/settings.service';
import { EmployeeService } from './../../services/employee.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Employee } from './../../Employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent implements OnInit {

  disableSalary: boolean = false;
  employee: Employee = {
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    city: "",
    phone: 0,
    salary: 0
  }

  constructor(
    public flashMessagesService: FlashMessagesService, 
    public router: Router, 
    public employeeService: EmployeeService,
    public settingsService:SettingsService) {  }

  ngOnInit(): void {
    this.disableSalary = this.settingsService.getSettings().disableSalary;
  }

  addEmployee({ value, valid }: { value: Employee, valid: boolean }) {
    if (this.disableSalary) {
      value.salary = 0;
    }
    if (!valid) {
      this.flashMessagesService.show("Please write correct Info.", { cssClass: 'alert-danger', timeout: 3000 });
      this.router.navigate(['addEmployee']);
    } else {
      this.employeeService.addEmployee(value);
      this.flashMessagesService.show("Thanks new Employee added successfully !", { cssClass: 'alert-success', timeout: 3000 });
      this.router.navigate(['/']);
    }
  }
}
