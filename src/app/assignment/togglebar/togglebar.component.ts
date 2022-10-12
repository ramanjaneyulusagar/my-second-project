import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  faFilm, faPeopleGroup, faUser, faPenToSquare,
  faList, faTags, faPenSquare
} from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { HttpserviceService } from '../httpservice.service';
import { ListView1Component } from '../list-view1/list-view1.component';
//import{customer} from '../app/assignment/customerdata1.ts'
import { customer } from '../customerdata1';
@Component({
  selector: 'app-togglebar',
  templateUrl: './togglebar.component.html',
  styleUrls: ['./togglebar.component.css']
})
export class TogglebarComponent implements OnInit {
  faFilm = faFilm;
  faPenToSquare = faPenToSquare;
  faPeopleGroup = faPeopleGroup;
  faUser = faUser;
  faList = faList; faPenSquare = faPenSquare;
  faTags = faTags;
  active = 1
  formdata: customer = {
    //id: '',
    firstName: '',
    lastName: '',
    gender: '',
    address: '',
    city: '',
    state: { name: '', abbreviation: '' }
  }
  constructor(private router: ActivatedRoute, private httpservice: HttpserviceService, private route: Router) { }
  @ViewChild(ListView1Component) variable!: ListView1Component
  render: any
  names: any
  cost = 0;
  ngOnInit(): void {
    this.router.paramMap.subscribe((param) => {
      var id = Number(param.get('detail'))
      this.getbyid(id)
    })
  }
  getbyid(id: number) {
    this.httpservice.getbyid(id).subscribe((data) => {

      this.formdata = data;
      this.names = data;
      console.log(this.names);
      [this.names].map((c: any) => {
        c['cost'] = 0.0
        if (c?.orders) {
          c.orders.map((o: any) => {
            c['cost'] = c['cost'] + o.itemCost;
          });
        }
      })
    });
  }
  update() {
    console.log(this.formdata);
    this.httpservice.update(this.formdata).subscribe({
      next: (data) => {
        alert("data updated")
        this.route.navigate(['ListView1'])
      }

    })
  }
  deleted() {
    this.httpservice.delete(this.formdata).subscribe(data => {
      this.route.navigate(['ListView1'])

    })
  }
}

