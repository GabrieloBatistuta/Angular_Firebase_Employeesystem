import { Employee } from './../Employee';
import { AngularFireObject, AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { ChangeDetectionStrategy, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  employees: AngularFireList<any[]>;
  employee: AngularFireObject<any>;

  constructor(public afdb: AngularFireDatabase) {
    this.employees = this.afdb.list('employee/employees') as AngularFireList<Employee[]>;
  }

  getEmployees() {
    return this.employees;
  }
  addEmployee(value: any) {
    return this.employees.push(value);
  }
  getEmployee(id: string){
     this.employee = this.afdb.object('employee/employees/'+id) as AngularFireObject<Employee>;
     return this.employee;
  }
  updateEmployee(id:string,employee:any){
    return this.employees.update(id,employee);
  }
  deleteEmployee(id:string){
    return this.employees.remove(id);
  }
}