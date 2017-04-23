import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Instagram } from  '@ionic-native/instagram';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Instagram.isInstalled(function(err, installed) {

    if (installed) {
      console.log('Instagram is', installed);
    } else {
      console.log('Instagram is not installed');
    }
  });

  constructor(public navCtrl: NavController, private instagram: Instagram) {

 this.instagram.share('data:image/png;uhduhf3hfif33', 'Caption')
  .then(() => console.log('Shared!'))
  .catch((error: any) => console.error(error));
 
  }

}
