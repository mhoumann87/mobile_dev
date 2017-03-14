import { Player } from './player';

export class Game {

    playerOne: Player;
    playerTwo: Player;


    constructor() {
         
        }

        setPlayerName(playerNameOne: string, playerNameTwo: string) {

            this.playerOne = new Player(playerNameOne, 0);
            this.playerTwo = new Player(playerNameTwo, 0);
        }
   
}