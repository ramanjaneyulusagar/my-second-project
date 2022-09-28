import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faFilm, faPeopleGroup, faUser, faPenToSquare, faList, faTags, faPenSquare } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-togglebar',
  templateUrl: './togglebar.component.html',
  styleUrls: ['./togglebar.component.css']
})
export class TogglebarComponent implements OnInit {
  faFilm = faFilm;
  faPenToSquare = faPenToSquare;
  faPeopleGroup = faPeopleGroup;
  faUser = faUser;
  faList = faList; faPenSquare = faPenSquare;
  faTags = faTags;

  @ViewChild("bt") bt!: ElementRef;
  @ViewChild("bt1") bt1!: ElementRef;
  @ViewChild("bt2") bt2!: ElementRef;
  hidefile1 = false;
  hidefile2 = true;
  hidefile3 = true;


  constructor(private router: ActivatedRoute) { }


  names: any = []
  ngOnInit(): void {
    this.names.map((c: any) => {
      c['cost'] = 0.0
      if (c?.orders) {
        c.orders.map((o: any) => {
          c['cost'] = c['cost'] + o.itemCost;
        });
      };
    })
    this.router.queryParams.subscribe((paramdata: any = []) => {
      this.names = JSON.parse(paramdata.data)
      console.log(paramdata)
      console.log(this.names)
    })

  }



  CD() {


    this.hidefile1 = !this.hidefile1;
    this.hidefile2 = true;
    this.hidefile3 = true;
  }
  CO() {

    this.bt1.nativeElement.style.color = "black"
    this.bt2.nativeElement.style.color = "gray"
    this.bt.nativeElement.style.color = "gray"
    this.hidefile2 = !this.hidefile2;
    this.hidefile1 = true;
    this.hidefile3 = true;

  }
  ED() {

    this.hidefile3 = !this.hidefile3;
    this.hidefile1 = true;
    this.hidefile2 = true;
    this.bt2.nativeElement.style.color = "black"
    this.bt.nativeElement.style.color = "gray"
    this.bt1.nativeElement.style.color = "gray"
  }
}
