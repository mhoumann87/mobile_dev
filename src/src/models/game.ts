import { HomePage } from '../pages/home/home';
import { Player } from './player';

export class Game
{
  player1: Player;
  player2: Player;

  constructor()
  {

  }
  setPlayerName(playerName1:string, playerName2:string) {

      this.player1 = new Player(playerName1, "X", 0);
      this.player2 = new Player(playerName2, "O", 0);

  }
}
