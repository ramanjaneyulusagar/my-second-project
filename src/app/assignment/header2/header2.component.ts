import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faFilm, faPeopleGroup, faUser, faPenToSquare, faList, faTags, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { ListView1Component } from '../list-view1/list-view1.component';
import { CustomersOrders1Component } from '../new-customer1/adddetails/customers-orders1/customers-orders1.component';
@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {
  faFilm = faFilm;
  faPenToSquare = faPenToSquare;
  faPeopleGroup = faPeopleGroup;
  faUser = faUser;
  faList = faList; faPenSquare = faPenSquare;
  faTags = faTags;
  data!: string | null;
  constructor(private route: Router, private routeto: ActivatedRoute) { }
  names: any;
  ngOnInit(): void {


  }
  @ViewChild(CustomersOrders1Component)
  userdata!: CustomersOrders1Component;

}
