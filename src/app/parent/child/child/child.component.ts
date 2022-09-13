import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { child1 } from '../child1';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input () childdata:any;
@Output() dataevent=new EventEmitter<any>();
variable='';
name1:any;
hidefile=false;
comment='hello world';
  constructor() { }
children : child1 = {
  noOfchildren: 0,
  //noOfparent: 2

};
  ngOnInit(): void {

//this.name1=sessionStorage.getItem('name');
this.name1=sessionStorage.getItem!=null?sessionStorage.getItem('name'):'';

  }
toggle(){
  this.hidefile=!this.hidefile;
}
}
