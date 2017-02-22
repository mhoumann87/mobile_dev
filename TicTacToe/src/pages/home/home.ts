import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';
import { Game } from '../../models/game';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public game: Game = new Game();

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    
  }

  getNames() {

    let popUp = this.alertCtrl.create({
      title: 'Enter Player Names',
      message: 'Enter Name For Players',
      inputs: [
        {
        name: 'playerOne',
        placeholder: 'Player One'
      },
      {
        name: 'playerTwo',
        placeholder: 'Player Two'
      }
      ]

    })
  }

}
