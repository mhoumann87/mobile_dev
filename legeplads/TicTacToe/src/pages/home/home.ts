import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, alertCtrl: AlertController) {
  }

    public playerOneName ="Pia";
    public playerTwoName ="Henrik";
    public inputValue = "";
    public currentPlayer = "";
    public count = 1;
    public player = false;
    public oneWins = 0;
    public twoWins = 0;
    public playerOneScore = 0;
    public playerTwoScore = 0;
    public wins = [7, 56, 448, 73, 146, 292, 273, 84];

checkWin(score){
    for(var i = 0; i < this.wins.length; i++){
        if((this.wins[i] & score)  === this.wins[i]){
            if(this.currentPlayer == this.playerOneName){
                this.newGame();
                alert(this.playerOneName + " Wins");
                this.oneWins =+1;
            } else{
                this.newGame();
                alert(this.playerTwoName + " Wins");
                this.twoWins =+1;
            }
        }    
    }
    if(this.count == 10){
        alert("TIE");
        this.newGame();
    }
}
    
    
    placeBrick(param){
      console.log("param " + param);
      this.count += 1;
      if(this.count %2 == 0){
        this.currentPlayer = this.playerOneName;
        console.log(this.currentPlayer);
        var tile = <HTMLInputElement> document.getElementById(param);
        tile.disabled = true;
        document.getElementById(param).innerHTML='<i class="fa fa-circle-o"></i>';
        this.playerOneScore += Number(param);
        console.log(this.playerOneName + "score: " + this.playerOneScore);
        this.checkWin(this.playerOneScore);
      }
      else if(this.count %2 != 0){
        this.currentPlayer = this.playerTwoName;
        
        var tile = <HTMLInputElement> document.getElementById(param);
        tile.disabled = true;
        this.playerTwoScore += Number(param);
        document.getElementById(param).innerHTML='<i class="fa fa-times"></i>';
        console.log(this.playerTwoName + "score: " +this.playerTwoScore);          
        this.checkWin(this.playerTwoScore);
      }
  }
    
newGame(){
    console.log("starting new game");
    for(var i = 1; i < 512; i*2 ){
        var tile = <HTMLInputElement> document.getElementById(i.toString()); 
        if(tile != null || tile != undefined){
            tile.textContent="";
            tile.disabled = false;
            this.oneWins = this.oneWins;
            this.twoWins = this.twoWins;
            this.currentPlayer = "";
            i+=i;
            console.log(i);
        }
    }
    this.playerOneScore = 0;
    this.playerTwoScore = 0;
    this.count=1;
    }
}





