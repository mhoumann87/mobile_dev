import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { NavController, AlertController } from 'ionic-angular';
import {SettingsPage} from '../settings/settings';
import {Settings} from '../../models/settings';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public settings:Settings = new Settings();
  public currentItem:string;
  public items: Array<string> = new Array<string>();
  public itemsCrossed: Array<string> = new Array<string>();
  public settingsPage = SettingsPage;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public toastCtrl: ToastController) {
    this.settings = new Settings();

    this.items.push("Milk");
    this.items.push("Tomatoes");
  }
  public removeItem(item:string, position:number)
  { 
    console.log("remove " + item);
    this.deleteItem(item, position);
    this.logArray();
    this.itemsCrossed.unshift(item);
    this.logArray();
  }

  public undoCrossedItem(item:string, position:number)
  {
    console.log("undoCrossedItem: " + item)
    this.logArray();
    this.items.unshift(item);
    this.logArray();
    this.itemsCrossed.splice(position, 1);
    this.logArray();
   
  }

  public deleteItem(item:string, position:number)
  {
    console.log("delete " + item);
    this.logArray();
    this.items.splice(position, 1);
    this.logArray();
}

  public addItem()
  {
    if (this.items.indexOf("") == -1)
    {
      this.currentItem = "";
      this.items.unshift("");
    }
    else
    {
      let toast = this.toastCtrl.create({
      message: 'You are not done with the previous one',
      duration: 2000,
      position: 'top'
    });
    toast.present();
    }
  }

  public undoItem(item:string)
  {
    console.log("undo " + item)
    this.logArray();
    this.items.shift();
    this.logArray();
  }

  public confirmItem(item:string)
  {
    console.log("confirm " + item); 
    this.logArray();
    this.items.shift();
    this.logArray();
    this.items.unshift(this.currentItem);
    this.logArray();
    
    
  }

  logArray()
  {
     console.log("Items: " + JSON.stringify(this.items))
     console.log("ItemsCrossed: " + JSON.stringify(this.itemsCrossed));
  }

  addElementAlert()
  {
     let prompt = this.alertCtrl.create({
      title: 'Add',
      message: "Add groceries to your list",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
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
          text: 'Add',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

}
