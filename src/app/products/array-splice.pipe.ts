import {Pipe, PipeTransform} from '@angular/core';
import {Product} from "../model/product";

@Pipe({
  name: 'arraySplice'
})
export class ArraySplicePipe implements PipeTransform {
  transform(value: Product[], filter: string): Product[] {
    return value.filter(item => item.name.includes(filter));
  }
}
