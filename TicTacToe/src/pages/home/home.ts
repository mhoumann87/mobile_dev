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
    showPrompt() {
      let prompt = this.alertCtrl.create({
        title: 'Player name',
        message: "Enter a name for player",
        inputs: [
          {
            name: 'PlayerOne',
            placeholder: 'Player One'
          },
          {
             name: 'PlayerTwo',
             placeholder: 'Player Two'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Save',
            handler: data => {
              console.log('PlayerOne: ' + data.PlayerOne + ' PlayerTwo: ' + data.PlayerTwo );
              this.game.setPlayerName(data.PlayerOne, data.PlayerTwo);
              console.log(JSON.stringify(this.game.playerOne));
              console.log(JSON.stringify(this.game.playerTwo));
            }
          }
        ]
      });
      prompt.present();
   
  }

}
