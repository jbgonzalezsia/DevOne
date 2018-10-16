import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


//Add AngularFireModule
import { AngularFireModule } from '@angular/fire';
//Add AngularFireAuthModule
import { AngularFireAuthModule } from '@angular/fire/auth';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
//import { HomePage } from '../pages/home/home';
import { HomePageModule } from '../pages/home/home.module';
import { TabsPage } from '../pages/tabs/tabs';
import { Pagina2PageModule } from '../pages/pagina2/pagina2.module';
import { PaginaActionSheetPage } from '../pages/pagina-action-sheet/pagina-action-sheet';
import { AlertPage } from '../pages/alert/alert';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { LoggedinPage } from '../pages/loggedin/loggedin';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MiproviderProvider } from '../providers/miprovider/miprovider';
import { TabProvider } from '../providers/tab/tab';

const firebaseAuth = {
    apiKey: "AIzaSyCSLuzIA19y8ENlbecIPRS8gB7M9xN9azU",
    authDomain: "test-project-84a07.firebaseapp.com",
    databaseURL: "https://test-project-84a07.firebaseio.com",
    projectId: "test-project-84a07",
    storageBucket: "test-project-84a07.appspot.com",
    messagingSenderId: "166463169508"
  };

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    //HomePage,
    TabsPage,
    PaginaActionSheetPage,
    AlertPage,
    LoginPage,
    RegisterPage,
    LoggedinPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //PaginaActionSheetPageModule,
    Pagina2PageModule,
    HomePageModule,
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    //HomePage,
    TabsPage,
    PaginaActionSheetPage,
    AlertPage,
    LoginPage,
    RegisterPage,
    LoggedinPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MiproviderProvider,
    TabProvider
  ]
})
export class AppModule {}