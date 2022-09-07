import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLinkActive } from '@angular/router';
import data from '/C:/Users/Admin/angular001/my-first-project/src/assets/customerdetails/customers.json';
import data1 from '/C:/Users/Admin/angular001/my-first-project/src/assets/customerdetails/states.json';
import { faFilm, faPeopleGroup, faUser, faPenToSquare, faMapLocationDot, faList, faIdCard, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component implements OnInit {

  faFilm = faFilm;
  faPenToSquare = faPenToSquare;
  faPeopleGroup = faPeopleGroup;
  faUser = faUser;
  faList = faList; faIdCard = faIdCard; faMapLocationDot = faMapLocationDot; faPlus = faPlus;
  f: string = '';
  sear: string = '';
  activeTab = 0;
  constructor(private s: Router) { }

  ngOnInit(): void {
  }
}



