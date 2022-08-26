import { Component, OnInit } from '@angular/core';
//Servicios
import { DatosService } from '../../../../servicios/conexion/datos.service';
import {ExportexcelService} from '../../../../servicios/exportexcel/exportexcel.service'
//Modelo de datos
import { Paciente } from 'src/app/modelos/paciente/paciente';

@Component({
  selector: 'app-tablageneral',
  templateUrl: './tablageneral.component.html',
  styleUrls: ['./tablageneral.component.css']
})
export class TablageneralComponent implements OnInit {

  listPacients : Paciente[];
  dataForExcel = [];
  limit = 50;
  offset=0;
  visibleAtras= false;

  constructor(public datosService: DatosService, public exportService: ExportexcelService) { }

  ngOnInit(): void {
    this.getPacientes('?$limit='+this.limit+'&$offset='+this.offset);
  }

  siguiente(){

    this.offset= this.offset+50;

    this.getPacientes('?$limit='+this.limit+'&$offset='+this.offset);

    this.visibleAtras=true;


  }

  atras(){

    if (this.offset < 50){
      this.visibleAtras=false;
    }else{

      this.offset= this.offset-50;
      this.getPacientes('?$limit='+this.limit+'&$offset='+this.offset);
    }

  }

  //Método para exportar datos

  exportarDatos(){

  this.datosService.getPacients('?$limit=2000000').subscribe((pacientsAPI: Paciente[]) =>{

      //this.listPacients = [...pacietsAPI];

      pacientsAPI.forEach((row: any) => {
      this.dataForExcel.push(Object.values(row))
    })

  let reportData = {
      title: 'Reportes Covid-19',
      data: this.dataForExcel,
      headers: Object.keys(this.listPacients[0])
  }

    this.exportService.exportExcel(reportData);


    }, (error: any)=> {
      console.error('Error: '+ error)
    })



  }


  //Método para obtener los datos

  getPacientes(opcion: string){
    this.datosService.getPacients(opcion).subscribe((pacietsAPI: Paciente[]) =>{

      this.listPacients = [...pacietsAPI];


    }, (error: any)=> {
      console.error('Error: '+ error)
    })
  }


}
