import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsTableComponent} from './products-table/products-table.component';


@NgModule({
  declarations: [
    ProductsTableComponent
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
