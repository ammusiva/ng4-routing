import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbrNumber'
})
export class AbbrNumberPipe implements PipeTransform {

  transform(value: any, args?: any): any {
console.log(value, args);

    return value+".00";
  }

}
