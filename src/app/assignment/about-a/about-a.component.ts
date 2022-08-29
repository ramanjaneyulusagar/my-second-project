import { Component, OnInit } from '@angular/core';
import { faFilm,faPeopleGroup,faUser,faPenToSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-a',
  templateUrl: './about-a.component.html',
  styleUrls: ['./about-a.component.css']
})
export class AboutAComponent implements OnInit {
  faFilm=faFilm;
  faPenToSquare=faPenToSquare;
  faPeopleGroup=faPeopleGroup;
  faUser=faUser;
  search1='';
  constructor() { }

  ngOnInit(): void {
  }

}
