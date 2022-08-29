import { Component, Input, OnInit, ViewChild,ElementRef, Renderer2 } from '@angular/core';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import data from '/C:/Users/Admin/angular001/my-first-project/src/assets/customerdetails/customers.json';
import data1 from '/C:/Users/Admin/angular001/my-first-project/src/assets/customerdetails/states.json';
import { faFilm,faPeopleGroup,faUser,faPenToSquare } from '@fortawesome/free-solid-svg-icons';


interface customer1{
  _id:string,
  id: number,
  name: string
  abbreviation: string
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
@Component({
  selector: 'app-customers-a',
  templateUrl: './customers-a.component.html',
  styleUrls: ['./customers-a.component.css']
})
export class CustomersAComponent implements OnInit {
  faFilm=faFilm;
  faPenToSquare=faPenToSquare;
  faPeopleGroup=faPeopleGroup;
  faUser=faUser;
   f:string='';
    sear:string='';
   getvalue(val:any){
    console.log(val);
   }
   constructor(private rend:Renderer2,private http1:HttpClient,private s:Router) { }



 

  custom:customer[]=data;
  custom1:customer1[]=data1;
  gender:any;
  photomf:any;
  mf='';
    

  ngOnInit(): void {}
  @ViewChild('b1',{static:true}) b1:any;
  @ViewChild('b2',{static:true}) b2:any;
  @ViewChild('b3',{static:true}) b3:any;
  @ViewChild('b4',{static:true}) b4:any;
  @ViewChild('table',{static:true}) table:any;
  @ViewChild('hview',{static:false}) hview:any;
  @ViewChild('listView',{static:false}) listView:any;
  @ViewChild('cardView',{static:false}) cardView:any;
  @ViewChild('mapView1',{static:false}) mapView1:any;
  @ViewChild('newcustomer',{static:false}) newcustomer:any;
  i:any;

  ListView(){
    
    //this.s.navigate(['ListView1Component'])
    this.cardView.nativeElement.style.display="none";
    this.mapView1.nativeElement.style.display="none";
    this.newcustomer.nativeElement.style.display="none";
    if( this.listView.nativeElement.style.display==="block"){
      this.listView.nativeElement.style.display="none";
      
     }
     else {
       this.listView.nativeElement.style.display="block";
     }

  }
  CardView(){
    
    //this.s.navigate(['CardView1Component'])
    this.listView.nativeElement.style.display="none";
    this.mapView1.nativeElement.style.display="none";
    this.newcustomer.nativeElement.style.display="none";
    if( this.cardView.nativeElement.style.display==="block"){
      this.cardView.nativeElement.style.display="none";
      
     }
     else {
       this.cardView.nativeElement.style.display="block";
     }

  }
  mapView(){
    
    //this.s.navigate(['MapViewComponent'])
    this.listView.nativeElement.style.display="none";
    this.cardView.nativeElement.style.display="none";
    this.newcustomer.nativeElement.style.display="none";
    if( this.mapView1.nativeElement.style.display==="block"){
      this.mapView1.nativeElement.style.display="none";
      
     }
     else {
       this.mapView1.nativeElement.style.display="block";
     }

  }
  
  newCustomer(){
    
    this.listView.nativeElement.style.display="none";
    this.cardView.nativeElement.style.display="none";
    this.mapView1.nativeElement.style.display="none";
    if( this.newcustomer.nativeElement.style.display==="block"){
      this.newcustomer.nativeElement.style.display="none";
      
     }
     else {
       this.newcustomer.nativeElement.style.display="block";
     }
  }
}
  //customerdetails:customer1[]=[];
//allcustomerdetails:customer1[]=[];

//this.http1.get<customer1[]>
//('./assets/customerdetails/customers.json')
//.subscribe(
 // (data:customer1[])=>
//{
  //this.customerdetails=data;
  //this.allcustomerdetails=this.customerdetails}); 
  
//search(value:string):void{
//this.customerdetails=this.allcustomerdetails.filter((val)=>val.name.toLowerCase().includes(value));}
 // getOrders(data:any){
 //let _data:any=[];
//if(data!=undefined && data.length>0){ _data.forEach((element:any) => {_data.push(element.productName)}) }console.log(_data)
//return _data}
  
    /*
    view1(){
         
        //this.rend.setStyle(this.hview.nativeElement, 'display', 'none');
        if( this.hview.nativeElement.style.display==="block"){
          this.hview.nativeElement.style.display="none";
          
         }
         else {
           this.hview.nativeElement.style.display="block";
         
        } 
    }
  listView(){
    
    if( this.table.nativeElement.style.display==="block"){
      this.table.nativeElement.style.display="none";
      
     }
     else {
       this.table.nativeElement.style.display="block";
     }

  }
  cardView(){
    this.table.nativeElement.style.display="none";
   

  }
  mapView(){
    
    this.table.nativeElement.style.display="none";

  }
  
  newCustomer(){
    
    this.table.nativeElement.style.display="none";

  }
 */ 

