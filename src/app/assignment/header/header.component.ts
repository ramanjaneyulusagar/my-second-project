import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
import { faFilm, faPeopleGroup, faUser, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
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
  constructor(private router: Router,
    private authservice: AuthserviceService) { }
  ngOnInit() {
  }
  logout() {
    this.authservice.logout();
    this.router.navigate(['/LoginA']);
  }
  refreshpage(): void {
    window.location.reload()
  }
}
