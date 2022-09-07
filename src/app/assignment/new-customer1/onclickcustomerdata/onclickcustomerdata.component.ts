import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    }))
    console.log(this.names)
  }
  }

 
