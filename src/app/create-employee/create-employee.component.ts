import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;
  message: string;

  constructor(private employeeService: EmployeeService,
              private router: Router) { }

  ngOnInit() {
    this.newEmployee();
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => {
        this.message = 'create success';
      }, error => {
        this.message = 'create fail!';
      });
    this.employee = new Employee();
    // this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  // gotoList() {
  //   this.router.navigate(['/employees']);
  // }
}
