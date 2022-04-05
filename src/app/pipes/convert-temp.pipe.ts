import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTemp'
})
export class ConvertTempPipe implements PipeTransform {

  transform(value: number, arg: string): number {
    if(arg === "c")
    {
      return (value - 32 ) * 5/9;
    }
    if(arg === "f")
    {
      return (value * 9/5) + 32;
    }
    return 0;
  }

}
