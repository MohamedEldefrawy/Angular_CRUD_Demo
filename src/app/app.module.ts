import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StudentsModule} from "./students/students.module";
import {DepartmentsModule} from "./departments/departments.module";
import {FormsModule} from "@angular/forms";
import {ProductsModule} from "./products/products.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentsModule,
    DepartmentsModule,
    FormsModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
