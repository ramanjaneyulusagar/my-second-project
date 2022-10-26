import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import data from '/src/assets/customerdetails/customers.json';
import { AuthserviceService } from 'src/app/assignment/authservice.service';
import { customer } from '../customerdata1';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login-a',
  templateUrl: './login-a.component.html',
  styleUrls: ['./login-a.component.css']
})
export class LoginAComponent implements OnInit {
  public isLoggedIn$!: Observable<boolean>;
  public isSubmitted: boolean = false;
  public isValidUser: boolean = false;
  form: FormGroup = new FormGroup({});
  public loginvalue: boolean = true
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthserviceService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.form = this.fb.group({

      email: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(20),
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(20),

      ])),
    });
  }
  onSubmit(): void {
    if (this.form.value.email != '' && this.form.value.password != '') {
      if (this.authService.login(this.form.value.email, this.form.value.password)) {
        this.router.navigate(['/Header1', 'ListView1']);

      }
      else {
        alert('wrong password')
        this.isSubmitted = true;

      }
    }
  }
}

