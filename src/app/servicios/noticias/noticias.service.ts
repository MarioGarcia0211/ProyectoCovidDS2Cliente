import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Noticia } from "../../modelos/noticia/noticia";
import { Observable } from "rxjs";
import { map, finalize } from "rxjs/operators";
import { AngularFireStorage } from '@angular/fire/storage';
import {firestore} from 'firebase/app';
import Timestamp = firestore.Timestamp;

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private noticiaCollection: AngularFirestoreCollection<Noticia>;

  constructor(private afs: AngularFirestore) {
    this.noticiaCollection=afs.collection<Noticia>('noticias', ref => ref.orderBy('fecha' , 'desc').limit(25));
   }

     public obtenerNoticias(): Observable<Noticia[]>{

    return this.noticiaCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Noticia;
        Object.keys(data).filter(key => data[key] instanceof Timestamp)
                        .forEach(key => data[key] = data[key].toDate());
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    )

  }
}
