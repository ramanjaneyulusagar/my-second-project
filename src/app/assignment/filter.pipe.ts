import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value:any[],f?:any):any{

    if(!value) return null;
    if(!f) return value
    f=f.toLowerCase();
    debugger;
    return value.filter(function(item:any)
    {
      return JSON.stringify(item)
      .toLowerCase()
      .includes(f);
    });   
  

  }
 }
 