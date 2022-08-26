import { Component, OnInit } from '@angular/core';
//Servicios
import { DatosService } from '../../../../servicios/conexion/datos.service';
import { ExportexcelService } from "../../../../servicios/exportexcel/exportexcel.service";
//Modelo de datos
import { Paciente } from 'src/app/modelos/paciente/paciente';
//Formulario
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-tabladpto',
  templateUrl: './tabladpto.component.html',
  styleUrls: ['./tabladpto.component.css']
})
export class TabladptoComponent implements OnInit {

  listPacients : Paciente[];
  dataForExcel = [];
   //Campo de búsqueda
  search = new FormControl('', []);
  //Espacio del nombre de lo buscado
  dpto = '';

  constructor(public datosService: DatosService, public exportService: ExportexcelService) { }

  ngOnInit(): void {
    /* this.getPacientes(); */
    this.dpto='Nombre del departamento';
  }

  //Método para exportar datos

  exportarDatos(){

    this.listPacients.forEach((row: any) => {
      this.dataForExcel.push(Object.values(row))
    })

  let reportData = {
      title: 'Reportes Covid-19',
      data: this.dataForExcel,
      headers: Object.keys(this.listPacients[0])
  }

    this.exportService.exportExcel(reportData);

  }

   //Método para obtener los datos

  getPacientes(){
    this.datosService.getPacients('?$limit=2000000&$q='+'"'+ this.search.value + '"').subscribe((pacietsAPI: Paciente[]) =>{

      this.listPacients = [...pacietsAPI];
      this.dpto=this.search.value;
      this.search.setValue('');
      /* console.log(this.listPacients); */

    }, (error: any)=> {
      console.error('Error: '+ error)
    })
  }

}
