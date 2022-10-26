import { Component, OnInit } from '@angular/core';
import { customer } from '../customerdata1';
import { ActivatedRoute, Router } from '@angular/router';
import {
  faFilm, faPeopleGroup, faUser, faPenToSquare,
  faList, faTags, faPenSquare
} from '@fortawesome/free-solid-svg-icons';
import { HttpserviceService } from '../httpservice.service';
import { ListView1Component } from '../list-view1/list-view1.component';
@Component({
  selector: 'app-togglebar2',
  templateUrl: './togglebar2.component.html',
  styleUrls: ['./togglebar2.component.css']
})
export class Togglebar2Component implements OnInit {
  faFilm = faFilm;
  faPenToSquare = faPenToSquare;
  faPeopleGroup = faPeopleGroup;
  faUser = faUser;
  faList = faList;
  faPenSquare = faPenSquare;
  faTags = faTags;
  formdata: customer = {
    //id: '',
    firstName: '',
    lastName: '',
    gender: '',
    address: '',
    city: '',
    state: { name: '', abbreviation: '' }
  }
  public active = 3
  public id: any;
  public data!: ListView1Component;
  public names: any
  constructor(private router: ActivatedRoute, private httpservice: HttpserviceService, private route: Router) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe((param) => {
      var id = Number(param.get('card'))
      this.getbyid(id)
      this.names = this.data
    })
  }
  getbyid(id: number) {
    this.httpservice.getbyid(id).subscribe((data) => {
      console.log("d", data)
      this.formdata = data
      this.names = data
    })
  }
  update() {
    console.log(this.formdata);
    this.httpservice.update(this.formdata).subscribe({
      next: (data) => {
        this.route.navigate(['/Header1', 'ListView1'])
      }

    })
  }
  deleted() {
    this.httpservice.delete(this.formdata).subscribe(data => {
      this.route.navigate(['/Header1', 'ListView1'])

    })
  }
}
