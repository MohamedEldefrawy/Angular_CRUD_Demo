import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableComponent} from './table/table.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [{
  path: '', component: TableComponent
}]

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    TableComponent
  ]
})
export class StudentsModule {
}
