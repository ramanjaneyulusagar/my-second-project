import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faFilm, faPeopleGroup, faUser, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-headersection',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faFilm = faFilm;
  faPenToSquare = faPenToSquare;
  faPeopleGroup = faPeopleGroup;
  faUser = faUser;
  f: string = '';
  sear: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logout() {
    //this.authservice.logout();
    this.router.navigate(['/LoginA']);
  }
  refreshpage():void {
    window.location.reload()
  }
}
