import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsTableComponent} from './products-table/products-table.component';
import {StarsComponent} from "../rating/stars/stars.component";
import {RatingModule} from "../rating/rating.module";
import { PowerToXPipe } from './power-to-x.pipe';
import { StringConvertPipe } from './string-convert.pipe';
import { ArraySplicePipe } from './array-splice.pipe';
import {MatTableModule} from "@angular/material/table";


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
    MatTableModule
  ],
  exports: [
    ProductsTableComponent
  ]
})
export class ProductsModule {
}
