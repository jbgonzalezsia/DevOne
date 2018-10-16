import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoggedinPage } from '../loggedin/loggedin';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	@ViewChild('username') uname;
	@ViewChild('password') password;
  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message: string){
  	this.alertCtrl.create({
	    title: 'Info',
	    subTitle: message,
	    buttons: ['OK!']
	  }).present();
    }

  signInUser(){
  	this.fire.auth.signInWithEmailAndPassword(this.uname.value, this.password.value).then(data => {
  		console.log('got some data', this.fire.auth.currentUser);
  		//user is logged in
  		this.alert('Success! Youre logged in');
  		this.navCtrl.setRoot(LoggedinPage);
  	})
  	.catch( error =>{
  		console.log('got an error', error);
  		this.alert(error.message);
  	})
  	console.log('Te autentificaste con ', this.uname.value, this.password.value);
  	//console.log(this.uname.value, this.password.value);
  	/**
  	if(this.uname.value == "admin" && this.password.value =="admin"){
		let alert = this.alertCtrl.create({
		    title: 'Low battery',
		    subTitle: '10% of battery remaining',
		    buttons: ['Dismiss']
		  });
		  alert.present();

  	}*/
  }

}
