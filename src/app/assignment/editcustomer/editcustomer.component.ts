import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/router';
import { HttpserviceService } from '../httpservice.service';
import { FormsModule } from '@angular/forms';
import { customer } from '../customerdata1';
@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent implements OnInit {
  formdata: customer = {
    //id: '',
    firstName: '',
    lastName: '',
    gender: '',
    address: '',
    city: '',
    state: { name: '', abbreviation: '' },
    orders: [{ productName: '', itemCost: null }],
    latitude: null,
    longitude: null,
  }
  constructor(private router: ActivatedRoute,
    private httpservice: HttpserviceService,
    private r: Router) { }
  ngOnInit(): void {
    this.router.paramMap.subscribe((param) => {
      var id = Number(param.get('id'))
      this.getbyid(id);
    })
  }
  getbyid(id: number) {
    this.httpservice.getbyid(id).subscribe((data) => {
      this.formdata = data
    })
  }
  update() {
    this.httpservice.update(this.formdata).subscribe(() => {
      this.r.navigate(['/ListView1'])
    })
  }
}
