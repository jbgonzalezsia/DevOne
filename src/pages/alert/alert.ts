import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertPage');
  }
  abrirAlert(){
	  	 let alert = this.alertCtrl.create({
	    title: 'Login',
	    inputs: [
	      {
	        name: 'username',
	        placeholder: 'Username'
	      },
	      {
	        name: 'password',
	        placeholder: 'Password',
	        type: 'password'
	      }
	    ],
	    buttons: [
	      {
	        text: 'Cancel',
	        role: 'cancel',
	        handler: data => {
	          console.log('Cancel clicked');
	        }
	      },
	      {
	        text: 'Login',
	        handler: data => {
	          
	          this.navCtrl.pop();
	        }
	      }
	    ]
	  });
	  alert.present();	




  }

}
