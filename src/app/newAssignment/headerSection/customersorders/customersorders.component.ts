import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  faFilm, faPeopleGroup, faUser, faPenToSquare,
  faList, faTags, faPenSquare
} from '@fortawesome/free-solid-svg-icons';
import { Customerdata } from '../customerdata';
@Component({
  selector: 'app-customersorders',
  templateUrl: './customersorders.component.html',
  styleUrls: ['./customersorders.component.css']
})
export class CustomersordersComponent implements OnInit {
  faFilm = faFilm;
  faPenToSquare = faPenToSquare;
  faPeopleGroup = faPeopleGroup;
  faUser = faUser;
  faList = faList; faPenSquare = faPenSquare;
  faTags = faTags;
  constructor(private router: ActivatedRoute) { }
  names: any = []
  active=2
  ngOnInit(): void {
   this.getdata()
  }
getdata(){
  this.router.queryParams.subscribe((paramdata:any) => {
    this.names = JSON.parse(paramdata.data)
    console.log(paramdata)
    console.log(this.names)
  //   this.names.map((c: any) => {
  //     c['cost'] = 0.0
  //     if (c?.orders) {
  //       c.orders.map((o: any) => {
  //         c['cost'] = c['cost'] + o.itemCost;
  //       });
  //     };
  //   })
})
}

}
