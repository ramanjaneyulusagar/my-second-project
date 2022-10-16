import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
import { faFilm, faPeopleGroup, faUser, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-header',
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
  login = true;
  //isLoggedIn$!: Observable<boolean>;
  constructor(private router: Router,
    private authservice: AuthserviceService) { }
  ngOnInit() {
   // this.isLoggedIn$ = this.authservice.isLoggedIn;
  }
  onLogout() {
    this.authservice.logoutUser();
  }
  logout() {
    this.authservice.logout();
    this.router.navigate(['/']);
  }
  refreshpage(): void {
    window.location.reload()
  }
}
