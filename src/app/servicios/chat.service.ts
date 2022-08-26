import { Injectable } from '@angular/core';
//Firebase
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
//Observable
import { Observable } from "rxjs";
//Modelo de mensajes
import { Mensaje } from "../modelos/mensaje/mensaje";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private chatCollection: AngularFirestoreCollection<Mensaje>;
  chats: Observable<Mensaje[]>

  constructor(public afs: AngularFirestore) {
    this.chatCollection = afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha', 'desc').limit(25));
    this.chats = this.chatCollection.valueChanges();
   }

   agregarMensaje(texto: string){

    let mensaje: Mensaje={
      mensaje : texto,
      fecha: new Date().getTime(),
    }

    return this.chatCollection.add(mensaje);

   }

   cargarMensaje(){
     return this.chats;
   }

}
