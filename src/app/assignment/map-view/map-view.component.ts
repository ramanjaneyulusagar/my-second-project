import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow } from '@angular/google-maps';


@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {
  sear: any
  @ViewChild('searchField', { static: true }) searchField: any;
  @ViewChild('GoogleMap', { static: true }) map: any;
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

  constructor() { }

  ngOnInit(): void {

  }

}
