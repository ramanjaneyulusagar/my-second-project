import { Component, OnInit } from '@angular/core';
import { CServiceService } from '../c-service.service';
import { Customerdata } from '../customerdata';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { faFilm, faPeopleGroup, faUser, faPenToSquare, faList, faTags, faPenSquare, faIdCard, faMapLocationDot, faPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faFilm = faFilm;
  faPenToSquare = faPenToSquare;
  faPeopleGroup = faPeopleGroup;
  faUser = faUser;
  faList = faList; faPenSquare = faPenSquare;
  faTags = faTags; faIdCard = faIdCard; faMapLocationDot = faMapLocationDot; faPlus = faPlus;
  active = 1
  search='';
  p: number = 1;
  total: number = 0;
   allcustomerdata:Customerdata[]=[]
   
  constructor(private service: CServiceService,private router: ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.getd();
  }
  getd() {
    this.service.getdata().subscribe((data) => {
      this.allcustomerdata=data
      console.log(data)
      this.allcustomerdata.map((c: any) => {
        c['cost'] = 0.0
        if (c?.orders) {
          c.orders.map((o: any) => {
            c['cost'] = c['cost'] + o.itemCost;
          });
        };
      })
      console.log(this.allcustomerdata)
    })

    
  }
  routeToViewOrder(data:any) {
   // console.log(data)data
    this.route.navigate(['headerSection/Customerorders'],
      {
        queryParams: {
          data: JSON.stringify(data)

        }
      }
    );

  }

  routeToCustomerDetails(data: any) {
    //debugger;
    this.route.navigate(['headerSection/Customerorders'],
      {
        queryParams: {
          data: JSON.stringify(data),

        }

      }
    );
  }


  center: google.maps.LatLngLiteral = { lat: 24, lng: 12 };
  display: any
  zoom = 1;
  markerOptions: google.maps.MarkerOptions = { draggable: true };
  markerPositions: google.maps.LatLngLiteral[] = [];

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) {
      this.center = (event.latLng.toJSON());
    }

  }
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) {
      this.display = (event.latLng.toJSON());
    }
  }
  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) {
      this.markerPositions.push(event.latLng.toJSON());
    }
  }

}
