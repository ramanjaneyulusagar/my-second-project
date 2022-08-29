import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{map} from 'rxjs/operators'
import dataa from '/C:/Users/Admin/angular001/my-first-project/src/assets/customerdetails/customers.json';
import data1a from '/C:/Users/Admin/angular001/my-first-project/src/assets/customerdetails/states.json';
interface customer1{
  _id:String,
  id: Number,
  name: String
  abbreviation: String
}

interface customer{

id:string,
firstName:string,lastName:string,
gender:string,
address:string,
city:string,
state:{abbreviation:string,name:string},
orders:[{
    productName:string
    itemCost:number 
}
] 
,
latitude:number,longitude:number
}

@Injectable({
  providedIn: 'root'
})

export class Service1Service {

  constructor(private http:HttpClient) { }
  Wcount(count:Number)
  {
       console.warn(count);
  }
  
 getTodo()
{
 return this.http.get('https://jsonplaceholder.typicode.com/posts')

} 





}
