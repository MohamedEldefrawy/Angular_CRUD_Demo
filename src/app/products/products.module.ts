import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsTableComponent} from './products-table/products-table.component';
import {StarsComponent} from "../rating/stars/stars.component";
import {RatingModule} from "../rating/rating.module";


@NgModule({
  declarations: [
    ProductsTableComponent,
  ],
  imports: [
    CommonModule,
    RatingModule
  ],
  exports: [
    ProductsTableComponent
  ]
})
export class ProductsModule {
}
