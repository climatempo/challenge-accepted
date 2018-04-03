import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datefy'
})
export class DatefyPipe implements PipeTransform {

  transform(value: string, args?: any): Date {
    return new Date(value);
  }

}
