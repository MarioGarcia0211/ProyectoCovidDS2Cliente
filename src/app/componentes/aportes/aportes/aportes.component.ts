import { Component, OnInit } from '@angular/core';
//Formulario
import { FormControl } from "@angular/forms";
//Servicio
import { ChatService } from "../../../servicios/chat.service";
//Modelo de mensajes
import { Mensaje } from "../../../modelos/mensaje/mensaje";

@Component({
  selector: 'app-aportes',
  templateUrl: './aportes.component.html',
  styleUrls: ['./aportes.component.css']
})
export class AportesComponent implements OnInit {

  texto = new FormControl('', []);
  chats: Mensaje[] = [];

  constructor(public chatService: ChatService) { }

  ngOnInit(): void {
    this.cargarMensajes();
  }

  enviarAporte(){

    if(this.texto.value == ''){
      return;
    }else{
      this.chatService.agregarMensaje(this.texto.value)
      .then(()=>  this.texto.setValue(''))
      .catch((err)=> console.error('Error al enviar mensaje: ', err));
    }

  }

  cargarMensajes(){
    this.chatService.cargarMensaje().subscribe((mensajes: Mensaje[])=>{

      this.chats = mensajes;

    })
  }

}
