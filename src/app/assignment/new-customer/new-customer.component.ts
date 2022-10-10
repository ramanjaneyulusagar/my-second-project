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
    private router: Router, 
    private httpservice: HttpserviceService) {
   }
formdata:customer={
  //id: '',
  firstName: '',
  lastName: '',
  gender: '',
  address: '',
  city: '',
  state:{name: '', abbreviation: '' },
  orders: [{productName:'',itemCost:null}],
  latitude: null,
  longitude: null,
  
}
  //productForm: FormGroup= new FormGroup({}); 
  submitted = false;
  user: customer[]=[];
  users: customer[] = [];
  ngOnInit(): void {
  }  
createdata(formdata:any){
  if(formdata){
  this.httpservice.createdata(this.formdata)
  .subscribe((data)=>{
    alert('new customer is added successfully')
    this.router.navigate(['ListView1'])
    })
  }
  else{ return}
  }

}
 // this.productForm = this.fb.group({
    //   id: ['',Validators.required],
    //   firstName:['',Validators.required],
    //   lastName: ['',Validators.required],
    //   gender: ['',Validators.required],
    //   address: ['',Validators.required],
    //   city: ['',Validators.required],
    //   state: this.fb.group([{
    //     abbreviation: ['',Validators.required], name: ['',Validators.required]
    //   }]),
    //   orders: this.fb.array([{
    //     productName: ['',Validators.required],
    //     itemCost:['',Validators.required]
    //   }

    //   ]),

    //   latitude: ['',Validators.required],
    //   longitude: ['',Validators.required]
    // });
  

  // orders(): FormArray {
  //   return this.productForm.get("orders") as FormArray
  // }
  // newOrders(): FormGroup {
  //   return this.fb.group({
  //     productName: '',
  //     itemCost: '',
  //   })
  // }
  // addOrders() {
  //   this.orders().push(this.newOrders());
  // }

  // removeOrders(i: number) {
  //   this.orders().removeAt(i);
  // }
  //get f(): { [key: string]: AbstractControl } { return this.productForm.controls; }
  //onSubmit() {
    // this.user = this.productForm.value;
    // this.httpservice.saveUser().subscribe(response => {
    //   console.log(response);
    //   this.users.push({
    //     id: response.length+1, 
    //     firstName: response.firstName,
    //     lastName: response.lastName,
    //     gender: response.gender,
    //     address: response.address,
    //     city: response.city,
    //     state: [{ abbreviation: response.abbreviation, name: response.name }],
    //     orders: [{ productName: response.productName, itemCost: response.itemCost }],
    //     latitude: response.latitude,
    //     longitude: response.longitude
    //   })
    // })

  //}