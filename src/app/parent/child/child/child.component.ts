import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input () childdata:any;
@Output() dataevent=new EventEmitter<any>();
variable='';
name1:any
  constructor() { }

  ngOnInit(): void {

//this.name1=sessionStorage.getItem('name');
this.name1=sessionStorage.getItem!=null?sessionStorage.getItem('name'):'';

  }

}
