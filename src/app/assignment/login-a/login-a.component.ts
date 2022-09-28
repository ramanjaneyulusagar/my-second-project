import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import data from '/src/assets/customerdetails/customers.json';
import { AuthserviceService } from 'src/app/assignment/authservice.service';
interface customer {

  id: string,
  firstName: string, lastName: string,
  gender: string,
  address: string,
  city: string,
  state: { abbreviation: string, name: string },
  orders: [{
    productName: string
    itemCost: number
  }
  ]
  ,
  latitude: number, longitude: number
}
@Component({
  selector: 'app-login-a',
  templateUrl: './login-a.component.html',
  styleUrls: ['./login-a.component.css']
})
export class LoginAComponent implements OnInit {
  isSubmitted: boolean = false;
  isValidUser: boolean = false;
  form: FormGroup = new FormGroup({});  
 loginvalue:boolean=true
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthserviceService) { }

  ngOnInit() {
    
    this.form = this.fb.group({
      
      email: new FormControl('',Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(20),
       // Validators.required,Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(20),
       // Validators.required,Validators.required
      ])),
    });
  }
  onSubmit() :void{
    if(this.form.value.email !=''&& this.form.value.password !=''){
      if(this.authService.login(this.form.value.email,this.form.value.password)){
        this.router.navigate(['/ListView1'] ) ; 

      }
      else
      {
        this.isSubmitted = true;
      }
    }
      // this.authService
      // .login(this.form.value.email, this.form.value.password)
      // .subscribe((data) => {
      //   if (data) {
      //     this.router.navigate(['/CardView1'] ) ;  // If valid and route to card
        
      //   }
      //   else{
      //   this.isSubmitted = true;
      //   this.isValidUser = data; 
      //   // false show error message
      //   }
      // });
  }
}
 // account_validation_messages = {
  //   'username': [
  //     { type: 'required', message: 'Username is required' },
  //     { type: 'minlength', message: 'Username must be at least 5 characters long' },
  //     { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
  //     { type: 'pattern', message: 'Your username must contain only numbers and letters' },
  //     { type: 'validUsername', message: 'Your username has already been taken' }
  //   ],
  //   'email': [
  //     { type: 'required', message: 'Email is required' },
  //     { type: 'pattern', message: 'Enter a valid email' }
  //   ],
  //   'confirm_password': [
  //     { type: 'required', message: 'Confirm password is required' },
  //     { type: 'areEqual', message: 'Password mismatch' }
  //   ],
  //   'password': [
  //     { type: 'required', message: 'Password is required' },
  //     { type: 'minlength', message: 'Password must be at least 5 characters long' },
  //     { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
  //   ],
  //   'terms': [
  //     { type: 'pattern', message: 'You must accept terms and conditions' }
  //   ]
  // }


   // loginForm = new FormGroup({
  //   email: new FormControl(null,Validators.compose([
  //     Validators.maxLength(30),
  //     Validators.minLength(6),
  //     Validators.email,
  //     Validators.required
  //    ])),
  //   password: new FormControl(null, Validators.compose([
       
  //      Validators.maxLength(10),
  //      Validators.minLength(5),
  //     // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]),this.loginForm[a-zA-Z0-9]'),
  //      Validators.required
  //     ]))

  // })
  // loginUser() {
  //   console.log("login sucessful",this.loginForm.value);
  //   if(this.loginForm.invalid){
  //     return
  //   }
  //   this.route.navigate(['CardView1']);
  // }
  // get email() { return this.loginForm.get('Email') }
  // get password() { return this.loginForm.get('Password') }
  // NaviagateToHomePage() {
    
    
  // }
