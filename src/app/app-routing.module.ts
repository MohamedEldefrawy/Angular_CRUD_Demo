import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "", component: HomeComponent},
  {path: "students", loadChildren: () => import('./students/students.module').then(m => m.StudentsModule)},
  {path: "products", loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)},
  {path: "departments", loadChildren: () => import('./departments/departments.module').then(m => m.DepartmentsModule)},
  {path: "**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
