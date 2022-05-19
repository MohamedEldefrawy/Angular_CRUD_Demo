import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableComponent} from './departments-table/table.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {DialogModule} from "primeng/dialog";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextModule} from "primeng/inputtext";
import {MatTableModule} from "@angular/material/table";
import {ButtonModule} from "primeng/button";
import {CustomPipesModule} from "../custom-pipes/custom-pipes.module";

const routes: Routes = [
  {
    path: '', component: TableComponent
  }
]

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    DialogModule,
    InputTextModule,
    MatTableModule,
    ButtonModule,
    CustomPipesModule,
    InputNumberModule
  ], exports: [
    TableComponent
  ]
})
export class DepartmentsModule {
}
