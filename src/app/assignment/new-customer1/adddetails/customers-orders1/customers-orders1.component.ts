import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faFilm, faPeopleGroup, faUser, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import data from '/C:/Users/Admin/angular001/my-first-project/src/assets/customerdetails/customers.json';
import data1 from '/C:/Users/Admin/angular001/my-first-project/src/assets/customerdetails/states.json';
import { ListView1Component } from 'src/app/assignment/list-view1/list-view1.component';

@Component({
  selector: 'app-customers-orders1',
  templateUrl: './customers-orders1.component.html',
  styleUrls: ['./customers-orders1.component.css']
})
export class CustomersOrders1Component implements OnInit {
  faFilm = faFilm;
  faPenToSquare = faPenToSquare;
  faPeopleGroup = faPeopleGroup;
  faUser = faUser;
  f: string = '';
  sear: string = '';
  constructor(private routeto: ActivatedRoute) { }
  names: any;
  name=sessionStorage.getItem("name");
  @ViewChild(ListView1Component) userdata!: ListView1Component;
  ngOnInit(): void {
    this.routeto.queryParams.subscribe(((paramdata: any) => {
      this.names = paramdata
      
    }))
    console.log(this.names);

  }

}
