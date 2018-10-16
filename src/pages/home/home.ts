import { Component, NgModule } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular'
import { PaginaActionSheetPage } from '../pagina-action-sheet/pagina-action-sheet';
import { AlertPage } from '../alert/alert';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

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
  goAlert():void{
  	this.navCtrl.push(AlertPage, { param: 'Hola desde Alert'});
  }
  goLogin():void{
  	this.navCtrl.push(LoginPage, { param: 'Hola desde Login'});
  }
   Login():void{
  	this.navCtrl.push(LoginPage, { param: 'Hola desde Login'});
  }
   Registro():void{
  	this.navCtrl.push(RegisterPage, { param: 'Hola desde Login'});
  }


}
