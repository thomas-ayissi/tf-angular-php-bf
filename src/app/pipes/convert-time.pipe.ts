import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTime'
})
export class ConvertTimePipe implements PipeTransform {

  transform(value: number): string {
    let minutes : number = Math.floor(value / 60);
    let secondes : number = value % 60;
    //version simple
    // return `${minutes} minutes ${secondes} secondes`;
    //version avec le 0 devant si < 10
    //return `${((minutes < 10)? "0" : "")+minutes} minutes ${(secondes < 10 ? "0" : "")+secondes} secondes`;
    //version avec le 0 + pluriel
    return `${((minutes < 10)? "0" : "")+minutes} minute${minutes > 1 ? "s":""} ${(secondes < 10 ? "0" : "")+secondes} seconde${secondes > 1 ? "s":""}`;

  }

}
