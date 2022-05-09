import {Component, OnInit} from '@angular/core';
import {Student} from "../../model/student";

@Component({
  selector: 'app-student-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public students: Student[] = [];
  public tempStudent: Student = new Student();
  public saveStudent: Student = new Student();

  constructor() {
  }

  ngOnInit(): void {
  }

  add() {
    if (this.tempStudent.id !== 0 || this.tempStudent.name !== "" || this.tempStudent.age !== 0 || this.tempStudent.departmentNumber !== 0)
      this.students.push(new Student(
        this.tempStudent.id,
        this.tempStudent.name,
        this.tempStudent.age,
        this.tempStudent.departmentNumber
      ));
    this.clearUi(this.tempStudent);
  }

  clearUi(student: Student) {
    student.id = 0;
    student.name = "";
    student.age = 0;
    student.departmentNumber = 0;
  }

  delete(id: number) {
    this.students.splice(this.students.findIndex(student => student.id === id), 1);
  }

  edit(id: number) {
    let selectedStudent = this.students.filter(student => student.id === id)[0];

    selectedStudent.id = this.saveStudent.id;
    selectedStudent.name = this.saveStudent.name;
    selectedStudent.age = this.saveStudent.age;
    selectedStudent.departmentNumber = this.saveStudent.departmentNumber;

    this.delete(id);
    this.students.push(selectedStudent);

    this.clearUi(this.saveStudent);
  }
}
