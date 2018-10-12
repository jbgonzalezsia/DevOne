import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';


/**
 * Generated class for the PaginaActionSheetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-pagina-action-sheet',
  templateUrl: 'pagina-action-sheet.html',
})
export class PaginaActionSheetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
  }

	  presentActionSheet() {
	   let actionSheet = this.actionSheetCtrl.create({
	     title: 'Modifica tu album',
	     buttons: [
	       {
	         text: 'Destructive',
	         role: 'destructive',
	         handler: () => {
	           console.log('Destructive clicked');
	         }
	       },
	       {
	         text: 'Archive',
	         handler: () => {
	           console.log('Archive clicked');
	         }
	       },
	       {
	         text: 'Cancel',
	         role: 'cancel',
	         handler: () => {
	           console.log('Cancel clicked');
	         }
	       }
	     ]
	   });

	   actionSheet.present();
	 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaginaActionSheetPage');
  }

}
