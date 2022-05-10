import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'powerToX'
})
export class PowerToXPipe implements PipeTransform {

  transform(value: number, power: number = 1): unknown {
    return Math.pow(value, power);
  }
}
