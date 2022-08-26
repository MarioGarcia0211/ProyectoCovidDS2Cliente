import { Component, OnInit } from '@angular/core';
//Servicio de conexion al API
import { DatosService } from '../../../../../../servicios/conexion/datos.service';
//Modelo de datos
import { Paciente } from 'src/app/modelos/paciente/paciente';
//Creador de gráficas
import {Chart} from 'chart.js';
//Formulario
import { FormControl } from "@angular/forms";

import { isEmptyExpression } from '@angular/compiler'

@Component({
  selector: 'app-graficamunicipio',
  templateUrl: './graficamunicipio.component.html',
  styleUrls: ['./graficamunicipio.component.css']
})
export class GraficamunicipioComponent implements OnInit {

   //Campo de búsqueda
  search = new FormControl('', []);
  //Espacio del nombre de lo buscado
  ciudad = '';
  //Datos para la gráfica de género
  chartGenero: Chart;
  contM = 0;
  contF = 0;
  porcM = 0;
  porcF = 0;
  //Datos para la gráfica de tipo
  chartTipo:Chart;
  contR = 0;
  contEs = 0;
  contI = 0;
  porcR = 0;
  porcEs = 0;
  porcI = 0;
  //Datos para la gráfica de muertes
  chartMuertes: Chart;
  contMr = 0;
  contV = 0;
  porcMr = 0;
  porcV = 0;
  //Datos para la gráfica de edades
  chartEdades:Chart;
  contEPr =0;
  contESr =0;
  contETr = 0;
  contECr = 0;
  contEQr = 0;
  porcEPr = 0;
  porcESr = 0;
  porcETr = 0;
  porcECr = 0;
  porcEQr = 0;
  //Datos para la gráfica de distritos
  chartDistritos: Chart;
  contDBo = 0;
  contDC = 0;
  contDSM =0;
  contDBa = 0;
  contDBu = 0;
  porcDBo = 0;
  porcDC = 0;
  porcDSM =0;
  porcDBa = 0;
  porcDBu = 0;
  //Datos para la gráfica atención
  chartAtencion: Chart;
  contAN =0;
  contAF =0;
  contAR =0;
  contAH =0;
  contAU =0;
  contAC =0;
  porcAN =0;
  porcAF =0;
  porcAR =0;
  porcAH =0;
  porcAU =0;
  porcAC =0;
  //Datos para gráfica estado
  chartEstado: Chart;
  contEL = 0;
  contEA = 0;
  contEF = 0;
  contEM = 0;
  contEN = 0;
  porcEL = 0;
  porcEA = 0;
  porcEF = 0;
  porcEM = 0;
  porcEN = 0;
  //Datos para la gráfica de tipo de recuperación
  chartTipoRecuperacion: Chart;
  contTRP = 0;
  contTRT = 0;
  contTRN = 0;
  porcTRP = 0;
  porcTRT = 0;
  porcTRN = 0;

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    this.ciudad='Nombre del municipio'
  }

   //Método para obtener los datos y dibujar las gráficas

  setGraficasCiudad(){

 //Inicializando las variables a cero


  this.contM = 0;
  this.contF = 0;

  this.contR = 0;
  this.contEs = 0;
  this.contI = 0;

  this.contMr = 0;
  this.contV = 0;

  this.contEPr =0;
  this.contESr =0;
  this.contETr = 0;
  this.contECr = 0;
  this.contEQr = 0;

  this.contDBo = 0;
  this.contDC = 0;
  this.contDSM =0;
  this.contDBa = 0;
  this.contDBu = 0;

  this.contAN =0;
  this.contAF =0;
  this.contAR =0;
  this.contAH =0;
  this.contAU =0;
  this.contAC =0;

  this.contEL = 0;
  this.contEA = 0;
  this.contEF = 0;
  this.contEM = 0;
  this.contEN = 0;

  this.contTRP = 0;
  this.contTRT = 0;
  this.contTRN = 0;

  if(this.chartGenero != null){
    this.destruirGraficas();
  }

    this.datosService.getPacients('?$limit=2000000&$select=fecha_de_notificaci_n, ciudad_de_ubicaci_n, departamento, atenci_n, edad, sexo, tipo, estado, pa_s_de_procedencia, fecha_de_muerte, fecha_diagnostico, fecha_recuperado, tipo_recuperaci_n&$q='+'"'+ this.search.value + '"').subscribe((pacietsAPI: Paciente[]) =>{

      //Recorrido de la información para obtener la cantidad de hombres y mujeres

      pacietsAPI.forEach(res => {

        if(res.sexo == 'M' || res.sexo == 'm'){
          this.contM++;
        }if(res.sexo == 'F' || res.sexo == 'f'){
          this.contF++
        }
  });

  //Porcentaje de la grafica genero

  this.porcM = (this.contM * 100)/pacietsAPI.length;
  this.porcF = (this.contF * 100)/pacietsAPI.length;

  //Diseño de la gráfica de genero

      this.chartGenero = new Chart('genero', {

        type: 'pie',
        data:{
          labels: ['Hombres', 'Mujeres'],
          datasets: [{
            label: 'Género',
            data: [this.contM, this.contF],
            backgroundColor:[
              'rgb(47, 198, 42)',
              'rgb(176, 76, 206)'
            ],
            borderColor: [
              'rgb(13, 91, 10)',
              'rgb(91, 10, 84)',
            ],
            borderWidth: 2
          }]
        },
        options: {
          scales:{
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }],
            xAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          },
          legend:{
            labels:{
              fontColor: 'black'
            }
          },

           animation:{
            duration: 500
          },
          hover: {
            animationDuration: 500
          },
           responsiveAnimationDuration: 500

        }

      });

  //Fin diseño gráfica de género

     //Recorrido de la información para obtener la cantidad de los diferentes tipos de contagio

     pacietsAPI.forEach(res => {

      if(res.tipo == 'Relacionado'){
        this.contR++;
      }if(res.tipo == 'Importado'){
        this.contI++;
      }if(res.tipo == 'En estudio'){
        this.contEs++}
});

//Porcentajes para la grafica tipo

this.porcR = (this.contR * 100)/pacietsAPI.length
this.porcEs = (this.contEs * 100)/pacietsAPI.length
this.porcI = (this.contI * 100)/pacietsAPI.length

//Diseño de la gráfica de tipo

    this.chartTipo = new Chart('tipo', {

      type: 'pie',
      data:{
        labels: ['Relacionado', 'Importado', 'En estudio'],
        datasets: [{
          label: 'Tipo',
          data: [this.contR, this.contI, this.contEs],
          backgroundColor:[
            'rgb( 10, 31, 187)',
            'rgb( 25, 182, 17)',
            'rgb( 232, 226, 19)'
          ],
          borderColor: [
            'rgb( 10, 24, 124)',
            'rgb(15, 111, 11)',
            'rgb( 175, 169, 9)'
          ],
          borderWidth: 2
        }]
      },
      options: {
        scales:{
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        legend:{
          labels:{
            fontColor: 'black'
          }
        },

         animation:{
          duration: 500
        },
        hover: {
          animationDuration: 500
        },
         responsiveAnimationDuration: 500

      }

    });



//Fin diseño gráfica de tipo

  //Recorrido de la información para obtener la cantidad de muertes

  pacietsAPI.forEach(res => {


    if(res.fecha_de_muerte == undefined || res.fecha_de_muerte == null){
      this.contV++;
    }else{
      this.contMr++
    }
}
);

//Porcentaje de la grafica de muertes

this.porcV = (this.contV * 100)/pacietsAPI.length;
this.porcMr = (this.contMr * 100)/pacietsAPI.length;


//Diseño de la gráfica de muertes

  this.chartMuertes = new Chart('muertes', {

    type: 'pie',
    data:{
      labels: ['Fallecidos', 'Vivos'],
      datasets: [{
        label: 'Muertes',
        data: [this.contMr, this.contV],
        backgroundColor:[
          'rgb( 240, 249, 249)',
          'rgb( 25, 241, 3)'
        ],
        borderColor: [
          'rgb(229, 229, 229)',
          'rgb( 18, 146, 5)',
        ],
        borderWidth: 2
      }]
    },
    options: {
      scales:{
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }],
        xAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      legend:{
        labels:{
          fontColor: 'black'
        }
      },

       animation:{
        duration: 500
      },
      hover: {
        animationDuration: 500
      },
       responsiveAnimationDuration: 500

    }

  });

//Fin diseño gráfica de muertes


  //Recorrido de la información para obtener las edades

  pacietsAPI.forEach(res => {


    if (parseInt(res.edad) < 10){
      this.contEPr++;
    }
    if (parseInt(res.edad) > 9 && parseInt(res.edad) < 20){
      this.contESr++;
    }
    if (parseInt(res.edad) > 19 && parseInt(res.edad) < 41){
      this.contETr++;
    }
    if (parseInt(res.edad) > 40 && parseInt(res.edad) < 61){
      this.contECr++;
    }
    if (parseInt(res.edad) > 60){
      this.contEQr++;
    }



}
);

//Porcentaje para la grafica edades

this.porcEPr = (this.contEPr *100)/pacietsAPI.length;
this.porcESr = (this.contESr *100)/pacietsAPI.length;
this.porcETr = (this.contETr *100)/pacietsAPI.length;
this.porcECr = (this.contECr *100)/pacietsAPI.length;
this.porcEQr = (this.contEQr *100)/pacietsAPI.length;


//Diseño de la gráfica de edades

  this.chartEdades = new Chart('edades', {

    type: 'bar',
    data:{
      /* labels: ['0-9', '10-19', '20-40', '41-60', '> 60'], */
      datasets: [
      {
        label: '0-9',
        data: [this.contEPr],
        backgroundColor:[
          'rgb(  23, 228, 219 )',
        ],
        fill: false,
        borderColor: [
          'rgb(16, 171, 164)',
        ],
        borderWidth: 2
      },
      {
        label: '10-19',
        data: [this.contESr],
        backgroundColor:[
          'rgb( 16, 213, 34 )',
        ],
        fill: false,
        borderColor: [
          'rgb( 12, 138, 24)',
        ],
        borderWidth: 2
      },

      {
        label: '20-40',
        data: [this.contETr],
        backgroundColor:[
          'rgb( 239, 46, 15 )',
        ],
        fill: false,
        borderColor: [
          'rgb( 185, 37, 13 )',
        ],
        borderWidth: 2
      },

      {
        label: '41-60',
        data: [this.contECr],
        backgroundColor:[
          'rgb( 244, 244, 8 )',
        ],
        fill: false,
        borderColor: [
          'rgb( 178, 178, 10)'
        ],
        borderWidth: 2
      },

      {
        label: '60 <',
        data: [this.contEQr],
        backgroundColor:[
          'rgb( 64, 2, 181)',
        ],
        fill: false,
        borderColor: [
          'rgb( 44, 8, 113 )',
        ],
        borderWidth: 2
      },

    ]
    },
    options: {
      scales:{
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }],
        xAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      legend:{
        labels:{
          fontColor: 'black'
        }
      },

       animation:{
        duration: 500
      },
      hover: {
        animationDuration: 500
      },
       responsiveAnimationDuration: 500

    }

  });

//Fin diseño gráfica de edades


 //Recorrido de la información para obtener de los distritos

  pacietsAPI.forEach(res => {


    if(res.ciudad_de_ubicaci_n == 'Bogotá D.C.'){
      this.contDBo++;
    }
    if(res.ciudad_de_ubicaci_n == 'Cartagena de Indias'){
      this.contDC++;
    }
    if(res.ciudad_de_ubicaci_n == 'Santa Marta'){
      this.contDSM++;
    }
    if(res.ciudad_de_ubicaci_n == 'Barranquilla'){
      this.contDBa++;
    }
    if(res.ciudad_de_ubicaci_n == 'Buenaventura'){
      this.contDBu++;
    }

}
);

//Porcentajes para la grafica de distritos

this.porcDBo = (this.contDBo *100)/pacietsAPI.length;
this.porcDC = (this.contDC *100)/pacietsAPI.length;
this.porcDSM = (this.contDSM *100)/pacietsAPI.length;
this.porcDBa = (this.contDBa *100)/pacietsAPI.length;
this.porcDBu = (this.contDBu *100)/pacietsAPI.length;

//Diseño de la gráfica de distritos

  this.chartDistritos = new Chart('distritos', {

    type: 'bar',
    data:{
      /* labels: ['0-9', '10-19', '20-40', '41-60', '> 60'], */
      datasets: [
      {
        label: 'Bogotá',
        data: [this.contDBo],
        backgroundColor:[
          'rgb(  23, 228, 219 )',
        ],
        fill: false,
        borderColor: [
          'rgb(16, 171, 164)',
        ],
        borderWidth: 2
      },
      {
        label: 'Cartagena',
        data: [this.contDC],
        backgroundColor:[
          'rgb( 16, 213, 34 )',
        ],
        fill: false,
        borderColor: [
          'rgb( 12, 138, 24)',
        ],
        borderWidth: 2
      },

      {
        label: 'Santa Marta',
        data: [this.contDSM],
        backgroundColor:[
          'rgb( 239, 46, 15 )',
        ],
        fill: false,
        borderColor: [
          'rgb( 185, 37, 13 )',
        ],
        borderWidth: 2
      },

      {
        label: 'Barranquilla',
        data: [this.contDBa],
        backgroundColor:[
          'rgb( 244, 244, 8 )',
        ],
        fill: false,
        borderColor: [
          'rgb( 178, 178, 10)'
        ],
        borderWidth: 2
      },

      {
        label: 'Buenaventura',
        data: [this.contDBu],
        backgroundColor:[
          'rgb( 64, 2, 181)',
        ],
        fill: false,
        borderColor: [
          'rgb( 44, 8, 113 )',
        ],
        borderWidth: 2
      },

    ]
    },
    options: {
      scales:{
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }],
        xAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      legend:{
        labels:{
          fontColor: 'black'
        }
      },

       animation:{
        duration: 500
      },
      hover: {
        animationDuration: 500
      },
       responsiveAnimationDuration: 500

    }

  });

//Fin diseño gráfica de distritos


//Recorrido de la información para obtener de la atención

  pacietsAPI.forEach(res => {


    if(res.atenci_n == 'N/A'){
      this.contAN++;
    }
    if(res.atenci_n == 'Fallecido'){
      this.contAF++;
    }
    if(res.atenci_n == 'Recuperado'){
      this.contAR++;
    }
    if(res.atenci_n == 'Hospital'){
      this.contAH++;
    }
    if(res.atenci_n == 'Hospital UCI'){
      this.contAU++;
    }
    if(res.atenci_n == 'Casa'){
      this.contAC++;
    }


}
);

//Porcentaje para la grafica de atención

this.porcAN = (this.contAN *100)/pacietsAPI.length;
this.porcAF = (this.contAF *100)/pacietsAPI.length;
this.porcAR = (this.contAR *100)/pacietsAPI.length;
this.porcAH = (this.contAH *100)/pacietsAPI.length;
this.porcAU = (this.contAU *100)/pacietsAPI.length;
this.porcAC = (this.contAC *100)/pacietsAPI.length;

//Diseño de la gráfica de atención

  this.chartAtencion = new Chart('atencion', {

    type: 'bar',
    data:{
      /* labels: ['0-9', '10-19', '20-40', '41-60', '> 60'], */
      datasets: [
      {
        label: 'Fallecidos',
        data: [this.contAF],
        backgroundColor:[
          'rgb( 228, 251, 248)',
        ],
        fill: false,
        borderColor: [
          'rgb( 138, 144, 143)',
        ],
        borderWidth: 2
      },
      {
        label: 'N/A',
        data: [this.contAN],
        backgroundColor:[
          'rgb(  23, 228, 219 )',
        ],
        fill: false,
        borderColor: [
          'rgb(16, 171, 164)',
        ],
        borderWidth: 2
      },
      {
        label: 'Recuperados',
        data: [this.contAR],
        backgroundColor:[
          'rgb( 16, 213, 34 )',
        ],
        fill: false,
        borderColor: [
          'rgb( 12, 138, 24)',
        ],
        borderWidth: 2
      },

      {
        label: 'Hospital',
        data: [this.contAH],
        backgroundColor:[
          'rgb( 239, 46, 15 )',
        ],
        fill: false,
        borderColor: [
          'rgb( 185, 37, 13 )',
        ],
        borderWidth: 2
      },

      {
        label: 'UCI',
        data: [this.contAU],
        backgroundColor:[
          'rgb( 244, 244, 8 )',
        ],
        fill: false,
        borderColor: [
          'rgb( 178, 178, 10)'
        ],
        borderWidth: 2
      },

      {
        label: 'Casa',
        data: [this.contAC],
        backgroundColor:[
          'rgb( 64, 2, 181)',
        ],
        fill: false,
        borderColor: [
          'rgb( 44, 8, 113 )',
        ],
        borderWidth: 2
      },

    ]
    },
    options: {
      scales:{
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }],
        xAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      legend:{
        labels:{
          fontColor: 'black'
        }
      },

       animation:{
        duration: 500
      },
      hover: {
        animationDuration: 500
      },
       responsiveAnimationDuration: 500

    }

  });

//Fin diseño gráfica de atención

//Recorrido de la información para obtener de los estados del paciente

  pacietsAPI.forEach(res => {


     if(res.estado == 'Leve'){
      this.contEL++;
    }
     if(res.estado == 'Fallecido'){
      this.contEF++;
    }
     if(res.estado == 'Asintomático'){
      this.contEA++;
    }
     if(res.estado == 'N/A'){
      this.contEN++;
    }
     if(res.estado == 'Moderado'){
      this.contEM++;
    }

}
);

//Porcetaje para la grafica estado

this.porcEL = (this.contEL *100)/pacietsAPI.length;
this.porcEF = (this.contEF *100)/pacietsAPI.length;
this.porcEA = (this.contEA *100)/pacietsAPI.length;
this.porcEN = (this.contEN *100)/pacietsAPI.length;
this.porcEM = (this.contEM *100)/pacietsAPI.length;

//Diseño de la gráfica de estado

  this.chartEstado = new Chart('estado', {

    type: 'bar',
    data:{
      /* labels: ['0-9', '10-19', '20-40', '41-60', '> 60'], */
      datasets: [
      {
        label: 'Fallecidos',
        data: [this.contEF],
        backgroundColor:[
          'rgb( 228, 251, 248)',
        ],
        fill: false,
        borderColor: [
          'rgb( 138, 144, 143)',
        ],
        borderWidth: 2
      },
      {
        label: 'N/A',
        data: [this.contEN],
        backgroundColor:[
          'rgb(  23, 228, 219 )',
        ],
        fill: false,
        borderColor: [
          'rgb(16, 171, 164)',
        ],
        borderWidth: 2
      },
      {
        label: 'Leve',
        data: [this.contEL],
        backgroundColor:[
          'rgb( 16, 213, 34 )',
        ],
        fill: false,
        borderColor: [
          'rgb( 12, 138, 24)',
        ],
        borderWidth: 2
      },

      {
        label: 'Asintomático',
        data: [this.contEA],
        backgroundColor:[
          'rgb( 239, 46, 15 )',
        ],
        fill: false,
        borderColor: [
          'rgb( 185, 37, 13 )',
        ],
        borderWidth: 2
      },

      {
        label: 'Moderado',
        data: [this.contEM],
        backgroundColor:[
          'rgb( 244, 244, 8 )',
        ],
        fill: false,
        borderColor: [
          'rgb( 178, 178, 10)'
        ],
        borderWidth: 2
      },


    ]
    },
    options: {
      scales:{
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }],
        xAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      legend:{
        labels:{
          fontColor: 'black'
        }
      },

       animation:{
        duration: 500
      },
      hover: {
        animationDuration: 500
      },
       responsiveAnimationDuration: 500

    }

  });

//Fin diseño gráfica de estado


//Recorrido de la información para obtener los datos del tipo de recuperación

  pacietsAPI.forEach(res => {


     if(res.tipo_recuperaci_n == 'PCR'){
      this.contTRP++;
    }
     if(res.tipo_recuperaci_n == 'Tiempo'){
      this.contTRT++;
    }if(res.tipo_recuperaci_n == undefined || res.tipo_recuperaci_n == null) {
      this.contTRN++;
    }

}
);

//Porcentaje para la grafica tipo de recuperación

this.porcTRP = (this.contTRP*100)/pacietsAPI.length;
this.porcTRT = (this.contTRT*100)/pacietsAPI.length;
this.porcTRN = (this.contTRN*100)/pacietsAPI.length;

//Diseño de la gráfica de tipo de recuperación

  this.chartTipoRecuperacion = new Chart('recuperacion', {

    type: 'bar',
    data:{
      /* labels: ['0-9', '10-19', '20-40', '41-60', '> 60'], */
      datasets: [

      {
        label: 'N/A',
        data: [this.contTRN],
        backgroundColor:[
          'rgb(  23, 228, 219 )',
        ],
        fill: false,
        borderColor: [
          'rgb(16, 171, 164)',
        ],
        borderWidth: 2
      },
      {
        label: 'Tiempo',
        data: [this.contTRT],
        backgroundColor:[
          'rgb( 16, 213, 34 )',
        ],
        fill: false,
        borderColor: [
          'rgb( 12, 138, 24)',
        ],
        borderWidth: 2
      },

      {
        label: 'PCR',
        data: [this.contTRP],
        backgroundColor:[
          'rgb( 239, 46, 15 )',
        ],
        fill: false,
        borderColor: [
          'rgb( 185, 37, 13 )',
        ],
        borderWidth: 2
      },

    ]
    },
    options: {
      scales:{
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }],
        xAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      legend:{
        labels:{
          fontColor: 'black'
        }
      },

       animation:{
        duration: 500
      },
      hover: {
        animationDuration: 500
      },
       responsiveAnimationDuration: 500

    }

  });

//Fin diseño gráfica de tipo de recuperación

//Limpiar campo de texto y poner ciudad
this.ciudad = this.search.value;
this.search.setValue('');

    }, (error: any)=> {
      console.error('Error: '+ error)
    })
  }

  destruirGraficas(){

  this.chartAtencion.destroy();
  //this.chartDistritos.destroy();
  this.chartEdades.destroy();
  this.chartEstado.destroy();
  this.chartGenero.destroy();
  this.chartMuertes.destroy();
  this.chartTipo.destroy();
  this.chartTipoRecuperacion.destroy();

  }


}
