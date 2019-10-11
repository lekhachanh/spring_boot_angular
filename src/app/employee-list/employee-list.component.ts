import { EmployeeDetailsComponent } from './../employee-details/employee-details.component';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  message: string;
  constructor(private employeeService: EmployeeService,
              private router: Router) {}

  ngOnInit() {
    this.getListEmployee();
  }

  getListEmployee() {
    const listEmployee = this.employeeService.getEmployeesList();
    listEmployee.subscribe(data => {
      this.employees = data;
    }, error => {
      this.message = error.message;
    });
  }

  deleteEmployee(id: number) {
    this.employeeService.delete(id)
      .subscribe(() => {
          this.getListEmployee();
        },
        error => console.log(error));
  }

  employeeDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  updateEmployee(id: number) {
    this.router.navigate(['update', id]);
  }
}
