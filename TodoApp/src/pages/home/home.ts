import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, storage: Storage) {

    storage.ready().then(()=>{

      storage.set('name', 'Michael');

      storage.get('name').then((val) => {
        console.log('Your name is', val);
      })
    });

  }

}
