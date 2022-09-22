import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListView1Component } from '../../list-view1/list-view1.component';
import { CustomersOrders1Component } from '../adddetails/customers-orders1/customers-orders1.component';
@Component({
  selector: 'app-onclickcustomerdata',
  templateUrl: './onclickcustomerdata.component.html',
  styleUrls: ['./onclickcustomerdata.component.css']
})
export class OnclickcustomerdataComponent implements OnInit {
  names: any = []
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.queryParams.subscribe((paramdata: any=[]) => {
       this.names = JSON.parse(paramdata.singlecustomer)
      console.log(paramdata)
    
    
      console.log(this.names)
  
    })
  }
  @ViewChild(ListView1Component) variable!: ListView1Component;
  @ViewChild(CustomersOrders1Component)
  userdata!: CustomersOrders1Component;


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


