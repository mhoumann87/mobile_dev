import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Weather } from '../providers/weather';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  weatherData = any;
  constructor(public navCtrl: NavController, private geolocation: Geolocation) {

    this.geolocation.getCurrentPosition().then((resp) => {
      let lat = resp.coords.latitude;
      let long = resp.coords.longitude;
      }).catch((error) => {
      console.log('Error getting location', error);
    });

    retriveWeather(lat, long) {
      this.weather.getWeather(lat, long)
        .then(data => {
          this.weatherData = data;
        })
    }
  }

}
