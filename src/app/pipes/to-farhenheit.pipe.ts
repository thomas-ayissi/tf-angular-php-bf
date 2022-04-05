import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFarhenheit'
})
export class ToFarhenheitPipe implements PipeTransform {

  transform(value: number): number {
    return (value * 9/5) + 32;
  }

}
