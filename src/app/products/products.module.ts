import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsTableComponent} from './products-table/products-table.component';
import {RatingModule} from "../rating/rating.module";
import {MatTableModule} from "@angular/material/table";
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputNumberModule} from "primeng/inputnumber";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {FileUploadModule} from "primeng/fileupload";
import {HttpClientModule} from '@angular/common/http';
import {CalendarModule} from 'primeng/calendar';
import {RouterModule, Routes} from "@angular/router";
import {CustomPipesModule} from "../custom-pipes/custom-pipes.module";


const routes: Routes = [{
  path: '', component: ProductsTableComponent
}]

@NgModule({
  declarations: [
    ProductsTableComponent,
  ],
  imports: [
    CommonModule,
    RatingModule,
    MatTableModule,
    ButtonModule,
    DialogModule,
    InputNumberModule,
    FormsModule,
    InputTextModule,
    FileUploadModule,
    HttpClientModule,
    CalendarModule,
    CustomPipesModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ProductsTableComponent
  ]
})
export class ProductsModule {
}
