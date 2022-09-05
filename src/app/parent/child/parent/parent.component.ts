import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


    parentdata='';
    title='hello world';
    @ViewChild(ChildComponent) variable!:ChildComponent
  constructor() {  
      //session Management
    sessionStorage.setItem("name","kanerika software private limited");
}
data(data:any){

  this.parentdata=data;
}
function1(data:any){
this.variable.variable=data;

}
update(data:any){

  this.title=data;
}
  ngOnInit(): void {
  }

}
