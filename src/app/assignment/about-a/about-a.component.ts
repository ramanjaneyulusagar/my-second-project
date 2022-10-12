import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { faFilm, faPeopleGroup, faUser, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { HttpserviceService } from '../httpservice.service';
import { customer1 } from '../customer2';

import jspdf from 'jspdf'
import { every, map } from 'rxjs';
import { customer } from '../customerdata1';

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
  constructor(private http: HttpClient, private route: Router, private httpservice: HttpserviceService) { }

  ngOnInit(): void {


  }

}



