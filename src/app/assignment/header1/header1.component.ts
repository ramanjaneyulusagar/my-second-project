import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLinkActive } from '@angular/router';
import { faFilm, faPeopleGroup, faUser, faPenToSquare, faMapLocationDot, faList, faIdCard, faPlus } from '@fortawesome/free-solid-svg-icons';
import { AuthserviceService } from '../authservice.service';
import { AuthguardGuard } from '../authguard.guard';
import { LoginAComponent } from '../login-a/login-a.component';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component implements OnInit {

  faFilm = faFilm;
  faPenToSquare = faPenToSquare;
  faPeopleGroup = faPeopleGroup;
  faUser = faUser;
  faList = faList; faIdCard = faIdCard; faMapLocationDot = faMapLocationDot; faPlus = faPlus;
  f: string = '';
  sear: string = '';
  activeTab = 0;
  login=false;
  constructor(private router: Router, private authservice:AuthserviceService,private guard:AuthguardGuard ,private loog:LoginAComponent) { }

  ngOnInit() {
if(this.authservice.isAuthenticate){
  this.login=false
} 
else{this.login=true}
  }
  logout(){
  
      this.router.navigate(['']);
    
}

}

