import { Component, OnInit ,ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import data from '/C:/Users/Admin/angular001/my-first-project/src/assets/customerdetails/customers.json';
import data1 from '/C:/Users/Admin/angular001/my-first-project/src/assets/customerdetails/states.json';
import { faFilm,faPeopleGroup,faUser,faPenToSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component implements OnInit {
  @ViewChild('listView',{static:false}) listView:any;
  @ViewChild('cardView',{static:false}) cardView:any;
  @ViewChild('mapView1',{static:false}) mapView1:any;
  @ViewChild('newcustomer',{static:false}) newcustomer:any;
  faFilm=faFilm;
  faPenToSquare=faPenToSquare;
  faPeopleGroup=faPeopleGroup;
  faUser=faUser;
   f:string='';
    sear:string='';
  constructor(private s:Router) { }

  ngOnInit(): void {
  }
  ListView(){
    
    this.s.navigate(['ListView1Component'])
    /*  this.cardView.nativeElement.style.display="none";
      this.mapView1.nativeElement.style.display="none";
      this.newcustomer.nativeElement.style.display="none";
    if( this.listView.nativeElement.style.display==="block"){
      this.listView.nativeElement.style.display="none";
    
     }
     else {
       this.listView.nativeElement.style.display="block";
     }
*/
  }
  CardView(){
    
    this.s.navigate(['CardView1Component'])
    /* this.listView.nativeElement.style.display="none";
    this.mapView1.nativeElement.style.display="none";
    this.newcustomer.nativeElement.style.display="none";
    if( this.cardView.nativeElement.style.display==="block"){
      this.cardView.nativeElement.style.display="none";
      
     }
     else {
       this.cardView.nativeElement.style.display="block";
     }
*/
  }
  mapView(){
    
    this.s.navigate(['MapViewComponent'])
  /* this.listView.nativeElement.style.display="none";
    this.cardView.nativeElement.style.display="none";
    this.newcustomer.nativeElement.style.display="none";
    if( this.mapView1.nativeElement.style.display==="block"){
      this.mapView1.nativeElement.style.display="none";
      
     }
     else {
       this.mapView1.nativeElement.style.display="block";
     }
*/
  }
  
  newCustomer(){

    this.s.navigate(['NewCustomer1Component'])}}
    /*
    this.listView.nativeElement.style.display="none";
    this.cardView.nativeElement.style.display="none";
    this.mapView1.nativeElement.style.display="none";
    if( this.newcustomer.nativeElement.style.display==="block"){
      this.newcustomer.nativeElement.style.display="none";
      
     }
     else {
       this.newcustomer.nativeElement.style.display="block";
     }

     */
  



