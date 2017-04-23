import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public googleMaps: GoogleMaps) {}

 ngAfterViewInit() {
 this.loadMap();
}

loadMap() {

  let element: HTMLElement = document.getElementById('map');

  let map: GoogleMap = GoogleMaps.create(element);
}

}
