import { Injectable } from '@angular/core';
//Importaciones necesarias para la conexión con el API
//Url en enviroment.apiURL
import {environment} from 'src/environments/environment';
//Modulo para conexiones http
import { HttpClient } from '@angular/common/http';
//Propiedad para poderme subscribirme al API
import { Observable } from 'rxjs';
//Modelo de los datos
import {Paciente} from 'src/app/modelos/paciente/paciente'

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  baseURL = environment.apiURL

  constructor(public http: HttpClient) { }

  //Método para obtener la información desde un API

  getPacients(option: string): Observable<Paciente[]>{
    const url = this.baseURL + option;
    return this.http.get<Paciente[]>(url);
  }

}
