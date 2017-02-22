import { Player } from './player';
import { Board } from './game';

export class Game {

    playerOne: Player;
    playerTwo: Player;


    constructor() {
         
        }

        setPlayerName(playerNameOne: string, playerNameTwo: string) {

            this.playerOne = new Player(playerNameOne, 0, 'X');
            this.playerTwo = new Player(playerNameTwo, 0, 'O');
        }
   
}