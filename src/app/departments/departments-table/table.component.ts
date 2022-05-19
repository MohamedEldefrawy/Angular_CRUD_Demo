import {Component, OnInit} from '@angular/core';
import {Department} from "../../model/department";
import {DepartmentService} from "../../services/department.service";

@Component({
  selector: 'app-departments-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public departments: Department[] = [];
  public tempDepartment: Department = new Department();
  public saveDepartment: Department = new Department();
  searchKey: string = "";
  displayModal: boolean = false;
  displayAddModal: boolean = false;
  selectedDepartment: Department = new Department();
  displayedColumns: string[] = ["ID", "Name", "Location", "Options"];


  constructor(private departmentService: DepartmentService) {
  }

  ngOnInit(): void {
    this.departments = this.departmentService.selectAll();
  }

  add() {
    if (this.tempDepartment.id !== 0 || this.tempDepartment.name !== "" || this.tempDepartment.location !== "") {
      console.log("Fired");
      this.departments = this.departmentService.add(new Department(
        this.tempDepartment.id,
        this.tempDepartment.name,
        this.tempDepartment.location
      ));

      this.clearUi(this.tempDepartment);
    }
  }

  delete(id: number) {
    this.departments = this.departmentService.delete(id);
  }

  edit(id: number) {
    let selectedDepartment = this.departments.filter(department => department.id === id)[0];
    this.departments = this.departmentService.edit(new Department(this.selectedDepartment.id, this.selectedDepartment.name, this.selectedDepartment.location));
    this.displayModal = false;
    this.clearUi(this.saveDepartment);
  }

  showDialog() {
    this.displayAddModal = true;
  }

  showModalDialog(id: number) {
    let department = this.departments.find(department => department.id === id);
    if (department)
      this.selectedDepartment = new Department(department.id, department.name, department.location);
    this.displayModal = true;
  }

  clearUi(department: Department) {
    department.id = 0;
    department.name = "";
    department.location = "";
  }
}
