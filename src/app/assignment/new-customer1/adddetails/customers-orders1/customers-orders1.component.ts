import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { faFilm, faPeopleGroup, faUser, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { ListView1Component } from 'src/app/assignment/list-view1/list-view1.component';
interface customer {
  id: string,
  firstName: string, lastName: string,
  gender: string,
  address: string,
  city: string,
  state: {
    abbreviation: string, name: string
  },
  orders:
  [{
    productName: string
    itemCost: number
  }],
  latitude: number, longitude: number
};
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
  constructor(private activatedRoute: ActivatedRoute) { }
  data: any
  //name = sessionStorage.getItem("name");
  @ViewChild(ListView1Component) userdata!: ListView1Component;
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(((paramdata: any) => {
      this.data = JSON.parse(paramdata.data)
      console.log(paramdata)
    }))
    console.log(this.data);

  }

}
