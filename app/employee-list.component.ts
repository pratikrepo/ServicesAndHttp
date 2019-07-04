import { Component,OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
        selector:"employee-list",
        template:`<h2>Employee List</h2>
        <h3>{{errorMsg}}</h3>
                   <ul *ngFor='let employee of employees'>
                    <li>{{employee.name}}</li>
                    </ul>`
})
export class EmployeelistComponent implements OnInit{
    public employees=[];
    public errorMsg :string;
    constructor(private _employeeservice: EmployeeService){ }
   
    ngOnInit(){
        this._employeeservice.getEmployees()
        .subscribe(data => this.employees = data,
            error => this.errorMsg =error);
    }

}