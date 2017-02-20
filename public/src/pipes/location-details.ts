import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'location-details'
})
@Injectable()
export class LocationDetails {
  transform(value: any, args?: any[]): any[] {
      // create instance vars to store keys and final output
      let keyArr: any[] = Object.keys(value),
          dataArr = [];

      // loop through the object,
      // pushing values to the return array
      keyArr.forEach((key: any) => {
          dataArr.push(value[key]);
      });

      // return the resulting array
      return dataArr;
  }
}
