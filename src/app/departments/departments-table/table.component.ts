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
  searchKey: string = "";
  displayModal: boolean = false;
  displayAddModal: boolean = false;
  selectedDepartment: Department = new Department();
  displayedColumns: string[] = ["ID", "Name", "Location", "Options"];


  constructor(private departmentService: DepartmentService) {
  }

  ngOnInit(): void {
    this.departmentService.selectAll().subscribe((data) => {
      this.departments = data;
    });
  }

  add() {
    if (this.tempDepartment._id !== 0 || this.tempDepartment.name !== "" || this.tempDepartment.location !== "") {
      this.departmentService.add(new Department(
        this.tempDepartment._id,
        this.tempDepartment.name,
        this.tempDepartment.location
      )).subscribe(data => {
        this.departmentService.selectAll().subscribe((data) => {
          this.departments = data;
          this.displayAddModal = false;
        })
      });

      this.clearUi(this.tempDepartment);
    }
  }

  delete(id: number) {
    this.departmentService.delete(id).subscribe(data => {
      this.departmentService.selectAll().subscribe(data => {
        this.departments = data;
      })
    })
  }

  edit(id: number) {
    let selectedDepartment = this.departments.filter(department => department._id === id)[0];
    this.departmentService.edit(new Department(this.selectedDepartment._id, this.selectedDepartment.name, this.selectedDepartment.location)).subscribe((data) => {
      this.displayModal = false;
      this.clearUi(this.selectedDepartment);
      this.departmentService.selectAll().subscribe(data => {
        this.departments = data;
      })
    });
  }

  showDialog() {
    this.displayAddModal = true;
  }

  showModalDialog(id: number) {
    let department = this.departments.find(department => department._id === id);
    if (department)
      this.selectedDepartment = new Department(department._id, department.name, department.location);
    this.displayModal = true;
  }

  clearUi(department: Department) {
    department._id = 0;
    department.name = "";
    department.location = "";
  }


}
