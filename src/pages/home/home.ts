import { Component, NgModule } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular'
import { PaginaActionSheetPage } from '../pagina-action-sheet/pagina-action-sheet';

@IonicPage({ name: 'home', segment: 'home-2/:param'})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  goPagina2():void{
  	this.navCtrl.push('pagina2', { param: 'Hola desde home'});
  }
  goActionSheet():void{
  	this.navCtrl.push(PaginaActionSheetPage, { param: 'Hola desde ActionSheet'});
  }

}
