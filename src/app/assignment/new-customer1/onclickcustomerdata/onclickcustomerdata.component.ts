import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListView1Component } from '../../list-view1/list-view1.component';
@Component({
  selector: 'app-onclickcustomerdata',
  templateUrl: './onclickcustomerdata.component.html',
  styleUrls: ['./onclickcustomerdata.component.css']
})
export class OnclickcustomerdataComponent implements OnInit {
names:any;
  constructor(private routeto:ActivatedRoute) { }

  ngOnInit(): void {
    this.routeto.queryParams.subscribe(((paramdata:any) => {
      this.names=paramdata
      sessionStorage.setItem("name",paramdata);
    }))
    console.log(this.names)
  }
  @ViewChild(ListView1Component) variable!:ListView1Component;

  
  }

 
