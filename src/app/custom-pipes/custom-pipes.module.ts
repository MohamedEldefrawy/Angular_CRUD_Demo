import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StringConvertPipe} from "./string-convert.pipe";
import {ArraySplicePipe} from "./array-splice.pipe";


@NgModule({
  declarations: [
    StringConvertPipe,
    ArraySplicePipe
  ],
  exports: [
    ArraySplicePipe,
    StringConvertPipe
  ],
  imports: [
    CommonModule,
  ]
})
export class CustomPipesModule {
}
