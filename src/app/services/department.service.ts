import {Injectable} from '@angular/core';
import {Department} from "../model/department";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private departments: Department[] = [];

  constructor() {
    this.departments = [
      new Department(1, "OS", "ALEX"),
      new Department(2, "PD", "Cairo"),
      new Department(3, "AI", "Cairo"),
      new Department(4, "Mobile", "ALEX"),
      new Department(5, "UI", "ALEX"),
    ];
  }

  public add(department: Department) {
    let temp = [...this.departments];
    temp.push(department);
    this.departments = temp;
    return temp;
  }

  public edit(department: Department) {
    let selectedDepartmentIndex = this.departments.findIndex(p => p.id === department.id);
    let temp = [...this.departments];
    temp.splice(selectedDepartmentIndex, 1, department);
    this.departments = temp;
    return temp;
  }

  public selectAll() {
    return this.departments;
  }

  public select(id: number) {
    return this.departments.find(p => p.id === id);
  }

  public delete(id: number) {
    let selectedDepartmentIndex = this.departments.findIndex(p => p.id === id);
    let temp = [...this.departments];
    temp.splice(selectedDepartmentIndex, 1);
    this.departments = temp
    return temp;
  }
}
