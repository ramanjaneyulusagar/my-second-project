import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthserviceService } from './assignment/authservice.service';
import { Observable } from 'rxjs';
//"json:server": "ts-node ./server/server.ts"
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';



  constructor(private authService: AuthserviceService) { }
  isLoggedIn$!: Observable<boolean>;
  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

}

