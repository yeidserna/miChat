import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFirestore} from '@angular/fire/firestore';
import { ChatServiceService } from '../servicios/chat-service.service'
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  //public chats: Observable<any[]>;

 /*constructor( db: AngularFirestore, public _cs: ChatServiceService) {
    this.chats= db.collection('chats').valueChanges();    
  }*/
	constructor( public _cs: ChatServiceService) {
	}
  
}

