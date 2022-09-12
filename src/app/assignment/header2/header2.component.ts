import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faFilm, faPeopleGroup, faUser, faPenToSquare, faList, faTags, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import data from '/C:/Users/Admin/angular001/my-first-project/src/assets/customerdetails/customers.json';
import data1 from '/C:/Users/Admin/angular001/my-first-project/src/assets/customerdetails/states.json';
import { ListView1Component } from '../list-view1/list-view1.component';
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
  constructor(private route: Router, private routeto: ActivatedRoute) { }
  names: any
  ngOnInit(): void {


  }
  @ViewChild(ListView1Component) userdata!: ListView1Component;



}
