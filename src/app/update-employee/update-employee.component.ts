import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;
  employee: Employee;
  message: string;

  constructor(private route: ActivatedRoute, private router: Router,
              private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = new Employee();
    this.id = this.route.snapshot.params.id;
    this.employeeService.getDetail(this.id)
      .subscribe(data => {
        this.employee = data;
      }, error => console.log(error));
  }

  updateEmployee() {
    this.employeeService.edit(this.id, this.employee)
      .subscribe(data => {
        this.message = 'update success';
      }, error => {
        this.message = 'update fail!';
      });
    this.employee = new Employee();
    // this.gotoList();
  }

  onSubmit() {
    this.updateEmployee();
  }

  // gotoList() {
  //   this.router.navigate(['/employees']);
  // }
  //
}
