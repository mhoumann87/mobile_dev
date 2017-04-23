import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Todo } from '../midels/todo';
import { Todo } from '../../models/todo';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, storage: Storage) {



    storage.ready().then(() => {
      storage.set('name', 'Michael');
    })
  

  
  
          storage.get('name'). then((val) => {
            console.log('Your name is ', val)
    })
  
  }

}
