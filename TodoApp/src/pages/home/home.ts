import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Task } from '../../models/task';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  public taskList: Array<Task>;

  constructor(public navCtrl: NavController,public alertCtrl: AlertController, storage: Storage) {

    storage.ready().then(()=>{
        storage.get('taskList').then((val) => {
        console.log('Your name is', val);
      })
    });

  }

}
