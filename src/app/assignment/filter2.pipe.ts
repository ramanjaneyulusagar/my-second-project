import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter2'
})
export class Filter2Pipe implements PipeTransform {

  // transform1(items: any[], param: string): any {
  //   param = param.toLowerCase();

  //   if (items) {
  //     return items.filter((item, index) => {
  //       const find = item.label.toLowerCase().indexOf(param);
  //       return find === -1 ? false : true;
  //     });
  //   }   
  // }

  transform(items: any[], param: string): any {
    // filter items array, items which match and return true will be kept, false will be filtered out
    if (param === 'all') {
      return items;
    }

    if (items) {
      return items.filter((item, index) => item.gender === param);
    }
  }
}
