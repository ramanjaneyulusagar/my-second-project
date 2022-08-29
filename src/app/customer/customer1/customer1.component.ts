import { Component, OnInit } from '@angular/core';
import { faFilm,faPeopleGroup,faUser } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute,Router } from '@angular/router';
import data12 from '/C:/Users/Admin/angular001/my-first-project/src/assets/customerdetails/states.json';
import { HttpClient } from '@angular/common/http';
interface customer12{
  _id:string,
  id: number,
  name:string 
  abbreviation: string
}
@Component({

  selector: 'app-customer1',
  templateUrl: './customer1.component.html',
  styleUrls: ['./customer1.component.css']
})
export class Customer1Component implements OnInit {
faFilm:any=faFilm;
custom12:customer12[]=data12;
faPeopleGroup=faPeopleGroup;
faUser=faUser;
search1='';
  constructor(private s:Router,private s1:ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {
  }

}
