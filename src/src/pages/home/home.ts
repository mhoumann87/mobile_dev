import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';

import { Player } from '../../models/player';
import { Game } from '../../models/game';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public game:Game = new Game();

  constructor(public alertCtrl: AlertController) {
    }

    showPrompt() {
      let prompt = this.alertCtrl.create({
        title: 'Player name',
        message: "Enter a name for player",
        inputs: [
          {
            name: 'Player1',
            placeholder: 'Player 1'
          },
          {
             name: 'Player2',
             placeholder: 'Player 2'
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
              console.log('Player1: ' + data.Player1 + ' Player2: ' + data.Player2 );
              this.game.setPlayerName(data.Player1, data.Player2);
              console.log(JSON.stringify(this.game.player1));
            }
          }
        ]
      });
      prompt.present();
    }


}
