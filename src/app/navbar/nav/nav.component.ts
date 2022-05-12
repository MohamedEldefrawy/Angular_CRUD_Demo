import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  homeActive: boolean = true;
  studentActive: boolean = false;
  departmentActive: boolean = false;
  productActive: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }


  toggleHomeActive() {
    this.homeActive = true;
    this.studentActive = false;
    this.departmentActive = false;
    this.productActive = false;
  }

  toggleStudentsActive() {
    this.homeActive = false;
    this.studentActive = true;
    this.departmentActive = false;
    this.productActive = false;
  }

  toggleDepartmentActive() {
    this.homeActive = false;
    this.studentActive = false;
    this.departmentActive = true;
    this.productActive = false;
  }

  toggleProductActive() {
    this.homeActive = false;
    this.studentActive = false;
    this.departmentActive = false;
    this.productActive = true;
  }
}
