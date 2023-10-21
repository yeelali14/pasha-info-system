import { Component, OnInit } from '@angular/core';
import { Department } from '../models/departments.model';
import { DepartmentsService } from '../services/departments.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  departments: Department[] = [];

  constructor(private departmentService: DepartmentsService) { }

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe(data => {
      console.log('data:', data);
      
      this.departments = data.departments;
    })
  }

}
