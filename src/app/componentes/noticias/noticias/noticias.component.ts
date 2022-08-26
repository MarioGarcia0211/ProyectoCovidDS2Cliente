import { Component, OnInit } from '@angular/core';
import { Noticia } from "../../../modelos/noticia/noticia";
//Servicios
import { NoticiasService } from "../../../servicios/noticias/noticias.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  public noticias$: Observable<Noticia[]>;
  public noticias : Noticia[];

  constructor(public noticiasService: NoticiasService) { }

  ngOnInit(): void {
    this.obtenerNoticias();
  }

  obtenerNoticias(){

    this.noticias$=this.noticiasService.obtenerNoticias();
    this.noticias$.forEach(res=> this.noticias=res);
  }

}
