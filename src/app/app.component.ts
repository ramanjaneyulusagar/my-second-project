import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service1Service } from './service/service1.service';
 //"json:server": "ts-node ./server/server.ts"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  edit=false;
  message=" touched me"
  getMessage()
  {
    this.edit=!this.edit    ;
    if(this.edit)
    {

      
    }
    else{
      this.message="touch me edit"
    }
  }
count=0;
constructor(private service1:Service1Service){}
log(){

  this.service1.Wcount(this.count);
  this.count++;
}
parentData='';
newcomp='hello';
transferData(){
  this.newcomp=this.parentData;
}
}

