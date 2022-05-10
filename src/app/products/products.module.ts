import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsTableComponent} from './products-table/products-table.component';
import {RatingModule} from "../rating/rating.module";
import {PowerToXPipe} from './power-to-x.pipe';
import {StringConvertPipe} from './string-convert.pipe';
import {ArraySplicePipe} from './array-splice.pipe';
import {MatTableModule} from "@angular/material/table";
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputNumberModule} from "primeng/inputnumber";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {FileUploadModule} from "primeng/fileupload";
import {HttpClientModule} from '@angular/common/http';
import {CalendarModule} from 'primeng/calendar';


@NgModule({
  declarations: [
    ProductsTableComponent,
    PowerToXPipe,
    StringConvertPipe,
    ArraySplicePipe,
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
    CalendarModule
  ],
  exports: [
    ProductsTableComponent
  ]
})
export class ProductsModule {
}
