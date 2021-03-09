import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Employee } from './../../Employee';
import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { SettingsService } from './../../services/settings.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

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
  isSalaryEditable: any;

  constructor(public employeeService: EmployeeService, public router: Router,
    public activatedRoute: ActivatedRoute, public flashMessagesService: FlashMessagesService,public settingsService:SettingsService) {
      this.isSalaryEditable = this.settingsService.getSettings().isSalaryEditable;
     }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.employeeService.getEmployee(this.id).valueChanges().subscribe(em => {
      this.employee = em;
    });
  }

  editEmployee({ value, valid }: { value: Employee, valid: boolean }) {
    if (!valid) {
      this.flashMessagesService.show("Please write correct Info.", { cssClass: 'alert-danger', timeout: 3000 });
      this.router.navigate(['editEmployee/' + this.id]);
    } else {
      this.employeeService.updateEmployee(this.id, value);
      this.flashMessagesService.show("Employee updated successfully !", { cssClass: 'alert-success', timeout: 3000 });
      this.router.navigate(['employee/' + this.id]);
    }
  }
}
