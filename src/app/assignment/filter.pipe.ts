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
    return value.filter(function(item)
    {
      return JSON.stringify(item)
      .toLowerCase()
      .includes(f);
    });   


  }
 }
  //transform(value:any[],f?:any):any{
    
/*
 transform(languages: any[], sear: any): any{     
    if(!sear) {
        return  [];
    }
   sear = sear.toLowerCase();
   return languages.filter(
       x =>x.toLowerCase().includes(sear)
   )
    if(!value) return null;
if(!f) return value
f=f.toLowerCase();
debugger;
return value.filter(function(item)
{
  return JSON.stringify(item)
  .toLowerCase()
  .includes(f);
});
*/

  


// if(value.length===0 ||f===''){
   // return value;
   // }
  // const customer=[];
    //for(const cust of value){
      //if(cust[f]===f){

        //customer.push(cust);
      //}
   // }
    //return customer;
    

    //{//return value?
//value.filter(item=>
  //item.name.search(new 
   // RegExp(f,'i'))>-1) : [] ;}
