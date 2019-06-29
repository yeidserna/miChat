import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire'; 
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';

import { Mensaje } from "../app/interfaz/mensaje.interfaz"

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

	private itemsCollection: AngularFirestoreCollection<Mensaje>;
	public chats: Mensaje[] =[];

	public usuario: any = [];
   constructor( private afs:AngularFirestore ,
   	           public afAuth:AngularFireAuth) {

   	this.afAuth.authState.subscribe( user=>{
       console.log('usuario',user);


       if(!user) return;
       //this.usuario=user;
       console.log(' this usuario',this.usuario);

       this.usuario.uid = user.uid;
       if(user.displayName === null){ 
         this.usuario.nombre ='usuario Prueba';
       }
       else{
         this.usuario.nombre =user.displayName;
       }
       
   	})
      
   }

   cargarMsj(){
       this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha','desc').limit(5));

       return this.itemsCollection.valueChanges().pipe(map( (mensajes: Mensaje[]) =>{
       									console.log(mensajes);

       									this.chats = [];

       									for (let mensaje  of mensajes){
                           //insertar en la primera posicion, por eso el unshift
       										this.chats.unshift(mensaje)
       									}
       									return this.chats ;
       								}))
   }


   agregarMsj(texto: string){

     console.log('voy agregarMsj');     

     if(this.usuario != undefined){
       let mensaje: Mensaje = {
         nombre: this.usuario.nombre,
         uid: this.usuario.uid,
         mensaje: texto,
         fecha: new Date().getTime()
       }
       return this.itemsCollection.add(mensaje);
     }
     else{
       console.log('undefined');
     }   		
   		
   }

   //metodo para iniciar sesión
	ingresar( proveedor:String){
		if(proveedor==='google'){
			this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
		}    
		else{
			this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
      /*.then(result => {
          console.log('success')
            console.log(result.user)
        })
        .catch( err => {
          console.log('failure')
          console.log(err.message)
      });*/
		}
		
	}

  loginUserContra(email:string,contra: string){
      return  new Promise((resolve, reject)=>{
          this.afAuth.auth.signInWithEmailAndPassword(email,contra)
          .then(  userData => resolve(userData),
            err => reject(err));
      });
  }

	//metodo para cerrar la sesion
	logout(){
		this.usuario= {};
		this.afAuth.auth.signOut();
	}	
}
