import { Component, OnInit } from '@angular/core';

import { ChatServiceService} from '../../servicios/chat-service.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

   public email: string= '';
   public password: string= '';
	constructor( public _cs: ChatServiceService
		//private miServicio : ChatServiceService,
		//public afAuth: AngularFireAuth
		) { }

	login (proveedor : string){
		this._cs.ingresar(proveedor);

	}

	loginUserContra(){
		this._cs.loginUserContra(this.email,this.password)
		/*.then((res)=>{
			this.router.navegate(['ad']);
		}).catch(err => console.log('err',err.message));*/
	}

  ngOnInit() {}

}
