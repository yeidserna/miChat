import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from '../../servicios/chat-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  
  mensaje: string= "";
  element:any;
  constructor(public _cs: ChatServiceService) { 


  	this._cs.cargarMsj()
  	    .subscribe( ()=>{

        setTimeout( ()=>{
               this.element.scrollTop = this.element.scrollHeight;
            },20);

        });

  }

  enviar_mensaje(){
  	console.log(this.mensaje);
    if(this.mensaje.length===0){
      return;
    }

    this._cs.agregarMsj(this.mensaje)
    .then ( ()=>this.mensaje = "")
        .catch( (err)=>console.log("Error al enviar mensaje", err))
       
  }

  ngOnInit() {
    this.element=document.getElementById('app-mensajes');
  }

}
