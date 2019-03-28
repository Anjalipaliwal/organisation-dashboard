import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  //Object array of type 'any' created//
  Employee: any = [];
  constructor(public restApi: RestApiService) { }
//invoking load method in oninit() //
  ngOnInit() {
    this.loadEmployees()
  }
  //method for retrieving employees//
  loadEmployees() {
    return this.restApi.getEmployees().subscribe((data: {}) => {
      this.Employee = data;
    })
  }
  //method for callin method delete if performed, popup should appear//
  deleteEmployee(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteEmployee(id).subscribe(data => {
        this.loadEmployees()
      })
    }
  }  
}
