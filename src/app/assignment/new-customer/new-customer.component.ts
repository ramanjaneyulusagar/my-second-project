import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators, AbstractControl, ControlContainer, NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { HttpserviceService } from '../httpservice.service';
import { customer } from '../customerdata1';
@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
  constructor(private fb: FormBuilder,
    private route: Router,
    private httpservice: HttpserviceService) {
  }
  formdata: customer = {
    firstName: '',
    lastName: '',
    gender: '',
    address: '',
    city: '',
    state: { name: '', abbreviation: '' }
  }
  public submitted = false;
  public user: customer[] = [];
  public users: customer[] = [];
  ngOnInit(): void {
  }
  createdata(formdata: any) {
    if (formdata) {
      this.httpservice.createdata(this.formdata)
        .subscribe((data) => {
          this.route.navigate(['/Header1','ListView1'])
        })
    }
    else { return }
  }

}

