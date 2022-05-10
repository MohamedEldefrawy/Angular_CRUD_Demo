import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsTableComponent} from './products-table/products-table.component';
import {StarsComponent} from "../rating/stars/stars.component";


@NgModule({
  declarations: [
    ProductsTableComponent,
    StarsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductsTableComponent
  ]
})
export class ProductsModule {
}
