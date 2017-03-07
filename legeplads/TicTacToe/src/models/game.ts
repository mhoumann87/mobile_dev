import { Player } from './player';

export class Game {

    playerOne: Player;
    playerTwo: Player;


    constructor() {
         
        }

        setPlayerName(playerNameOne: string, playerNameTwo: string) {

            this.playerOne = new Player(playerNameOne);
            this.playerTwo = new Player(playerNameTwo);
        }
   
}