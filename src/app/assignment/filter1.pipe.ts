import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter1'
})
export class Filter1Pipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    if (!items) return [];
    if (!value) return items;

    return items.filter(singleItem =>
        singleItem['name'].toLowerCase().includes(value.toLowerCase())
    );

}
}
