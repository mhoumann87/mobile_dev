import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';
import { Board } from '../../models/board';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
    this.boards.push(new Board("myModel1", "myBrand1", "Blue", 399 ));
    this.boards.push(new Board("myModel2", "myBrand2", "Red", 399 ));
    this.boards.push(new Board("myModel3", "myBrand3", "Black", 399 ));
    
    this.selectedBoard = new Board("","","",0);
  }
  public selectedBoard:Board;

  public boards:Array<Board> = new Array<Board>();

  buySkateboard()
  {
      let alert = this.alertCtrl.create({
    title: 'Confirm purchase',
      message: 'Do you want to buy this skateboard: ' + JSON.stringify(this.selectedBoard),
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Buy',
        handler: () => {
          console.log('Buy clicked');
        }
      }
    ]
  });
  alert.present();
  }
}