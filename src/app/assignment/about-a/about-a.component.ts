import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { faFilm, faPeopleGroup, faUser, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { HttpserviceService } from '../httpservice.service';
import { customer1 } from '../customer2';
interface User {
  email: string;
  password: string;
}
@Component({
  selector: 'app-about-a',
  templateUrl: './about-a.component.html',
  styleUrls: ['./about-a.component.css']
})
export class AboutAComponent implements OnInit {
  faFilm = faFilm;
  faPenToSquare = faPenToSquare;
  faPeopleGroup = faPeopleGroup;
  faUser = faUser;
  search1 = '';
  userdata: any
  formdata: User = {
    email: '',
    password: ''
  }
  constructor(private http: HttpClient, private route: Router, private httpservice: HttpserviceService) { }
  user: any
  users: User[] = [];
  sear: string = '';
  p: number = 1;
  total: number = 0;
 l={
  firstName: '', lastName: '',
  gender: 'all',
  address: '',
  city: '',
  state: { abbreviation: '', name: '' },
  orders: [{
      productName: '',
      itemCost: null
  }
  ]
  ,
  latitude: null, longitude: null
 }

  ngOnInit(): void {
    this.getAllCustomerData();

  }
  createdata() {
    this.httpservice.create(this.formdata).subscribe(data => {
      // this.user=data
      console.log(data)

    })

  }
  getAllCustomerData() {
    this.httpservice.getAllCustomerData().subscribe(response => {
      this.userdata = response;
      this.userdata.map((c: any) => {
        c['cost'] = 0.0
        if (c?.orders) {
          c.orders.map((o: any) => {
            c['cost'] = c['cost'] + o.itemCost;
          });
        };
      })
      console.log(this.userdata)
    })

  }
  // filteredUsers!: any[];
  // filterBy: any;

  // filter() {
  //   this.filteredUsers = [...this.users.filter(user => user.name.includes(this.filterBy))];
  // }


  // addUserForm = new FormGroup({
  //   name: new FormControl('', [Validators.required]),
  //   age: new FormControl('', [Validators.required]),
  // });
  // saveUser1() {
  //   this.user = this.addUserForm.value;
  //   this.httpservice.saveUser1().subscribe((response: any) => {
  //     //console.log(response);

  //     this.users.push({ name: response.name, age: response.age });

  //   });
  // }


}


