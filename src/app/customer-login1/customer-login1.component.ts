import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild, ɵɵelementContainerStart } from '@angular/core';
import { PatternValidator } from '@angular/forms';
import { RouterLink ,Router} from '@angular/router';
import { bottom } from '@popperjs/core';

@Component({
  selector: 'app-customer-login1',
  templateUrl: './customer-login1.component.html',
  styleUrls: ['./customer-login1.component.css']
})
export class CustomerLogin1Component implements OnInit {

  constructor(private router1:Router) { }
@ViewChild('i2',{static:false}) i2:any;
@ViewChild('h1',{static:true}) h1:any;
@ViewChild('buton',{static:true}) buton:any;
@ViewChild('i1',{static:true}) i1:any;
disable=true
  ngOnInit(): void {
  }

  g(val:any){
    
if(val){
    this.i2.nativeElement.style.borderBottom='solid 10px green';
    this.h1.nativeElement.style.display='none';
    this.disable=false;
    this.buton.nativeElement.style.backgroundColor='green';
   
} 
else {
  this.h1.nativeElement.style.display='block';
  this.i2.nativeElement.style.borderBottom='solid 10px red';
  this.disable=true;
  this.buton.nativeElement.style.backgroundColor='red';
}

  }
  blur1(){
    this.i2.nativeElement.style.borderBottom='solid 2px black';
    this.h1.nativeElement.style.display='none';
  }

  loginToCustomer(vl:any){
    if(vl){
   
   this.router1.navigate(['Customer1Component']); 
  } 
  else {
    this.router1.navigate(['CustomerLogin1Component']);
  }
  }
  
  
 
  
}
