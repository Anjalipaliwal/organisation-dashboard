import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";
@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  //take input from user to add json items//
  @Input() employeeDetails = { name: '', email: '', phone: 0 }


  constructor( public restApi: RestApiService, 
    public router: Router) { }

  ngOnInit() {
  }
  //add employee , json object to list//
  addEmployee(dataEmployee) {
    this.restApi.createEmployee(this.employeeDetails).subscribe((data: {}) => {
      this.router.navigate(['/employees-list'])
    })
  }
}
