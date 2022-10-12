import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { customer } from '../customerdata1';
import { ActivatedRoute, Router } from '@angular/router';
import {
  faFilm, faPeopleGroup, faUser, faPenToSquare,
  faList, faTags, faPenSquare
} from '@fortawesome/free-solid-svg-icons';
import { HttpserviceService } from '../httpservice.service';
import { ListView1Component } from '../list-view1/list-view1.component';
@Component({
  selector: 'app-togglebar1',
  templateUrl: './togglebar1.component.html',
  styleUrls: ['./togglebar1.component.css']
})
export class Togglebar1Component implements OnInit {
  faFilm = faFilm; faPenToSquare = faPenToSquare; faPeopleGroup = faPeopleGroup; faUser = faUser; faList = faList;
  faPenSquare = faPenSquare; faTags = faTags;
  formdata: customer = {
    //id: '',
    firstName: '',
    lastName: '',
    gender: '',
    address: '',
    city: '',
    state: { name: '', abbreviation: '' }
  }
  active = 2
  id: any;
  constructor(private router: ActivatedRoute, private httpservice: HttpserviceService, private route: Router) { }
  @ViewChild(ListView1Component)
  data!: ListView1Component;
  names: any
  ngOnInit(): void {
    this.router.paramMap.subscribe((param) => {
      var id = Number(param.get('order')); this.getbyid(id); this.names = this.data;
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

