import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//import { ChatPageModule } from './chat/chat.module';

//componentes
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';

//importando servicio
import { ChatServiceService } from '../servicios/chat-service.service'

import { FormsModule } from '@angular/forms';

import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire'; 
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule} from '@angular/fire/firestore';
//importar servicio

export const firebaseConfig = {
  apiKey: "AIzaSyBFDqWDRkGY0e55WRsFlRDTTkCgH1x2d_s",
  authDomain: "bdchattear.firebaseapp.com",
  databaseURL: "https://bdchattear.firebaseio.com",
  projectId: "bdchattear",
  storageBucket: "bdchattear.appspot.com",
  messagingSenderId: "1019215840674",
  appId: "1:1019215840674:web:3ed120cbf0d58e40"
}

export const firebaseConfigOk = {
    apiKey: "AIzaSyCnD5mYVAQT0a9bixatgyGNhzE9WB3onqE",
    authDomain: "bdmichat.firebaseapp.com",
    databaseURL: "https://bdmichat.firebaseio.com",
    projectId: "bdmichat",
    storageBucket: "",
    messagingSenderId: "935442979193",
    appId: "1:935442979193:web:d3af425cdac0b113"
  };



@NgModule({
  declarations: [AppComponent,ChatComponent,HomeComponent],
  entryComponents: [],
  imports: [
  	BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  	AngularFireModule.initializeApp(firebaseConfigOk),
    AngularFirestoreModule,
  	AngularFireDatabaseModule,AngularFireAuthModule, FormsModule
  ],
  providers: [
    StatusBar,
    AngularFirestore,
    AngularFireDatabase,
    SplashScreen,
    ChatServiceService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
