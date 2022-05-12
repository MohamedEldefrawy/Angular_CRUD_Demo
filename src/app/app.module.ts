import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StudentsModule} from "./students/students.module";
import {DepartmentsModule} from "./departments/departments.module";
import {FormsModule} from "@angular/forms";
import {ProductsModule} from "./products/products.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarModule} from "./navbar/navbar.module";
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentsModule,
    DepartmentsModule,
    FormsModule,
    ProductsModule,
    BrowserAnimationsModule,
    NavbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
