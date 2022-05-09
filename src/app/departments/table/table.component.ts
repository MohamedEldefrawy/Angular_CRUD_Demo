import {Component, OnInit} from '@angular/core';
import {Department} from "../../model/department";

@Component({
  selector: 'app-department-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public departments: Department[] = [];
  public tempDepartment: Department = new Department();
  public saveDepartment: Department = new Department();

  constructor() {
  }

  ngOnInit(): void {
  }

  add() {
    if (this.tempDepartment.id !== 0 || this.tempDepartment.name !== "" || this.tempDepartment.location !== "")
      this.departments.push(new Department(
        this.tempDepartment.id,
        this.tempDepartment.name,
        this.tempDepartment.location
      ));
    this.clearUi(this.tempDepartment);
  }

  clearUi(department: Department) {
    department.id = 0;
    department.name = "";
    department.location = "";
  }

  delete(id: number) {
    this.departments.splice(this.departments.findIndex(department => department.id === id), 1);
  }

  edit(id: number) {
    let selectedDepartment = this.departments.filter(department => department.id === id)[0];

    selectedDepartment.id = this.saveDepartment.id;
    selectedDepartment.name = this.saveDepartment.name;
    selectedDepartment.location = this.saveDepartment.location;

    this.delete(id);
    this.departments.push(selectedDepartment);

    this.clearUi(this.saveDepartment);
  }
}
