import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

const data = [{
  angler_name: "John Doe",
  datetime: "2016-05-07 22:17:00",
  fishing_method: "spearfishing",
  breed: "sea trout",
  length: "48,5",
  weight: "3,5",
  weather: "Clear weather, no wind",
  location: "Sjællands Odde",
  latitude: 55.9800731,
  longitude: 11.2316926
}]

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  entries: any;
  constructor(public navCtrl: NavController) {
  this.entries = data;
  }

}
