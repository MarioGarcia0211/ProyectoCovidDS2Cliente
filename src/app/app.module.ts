import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Firebase
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { environment } from "../environments/environment";
//Rutas
import { AppRoutingModule } from './app-routing.module';
//Conexion
import {HttpClientModule} from '@angular/common/http';
//Servicios
import {DatosService} from './servicios/conexion/datos.service';
import { ChatService } from "./servicios/chat.service";
import { NoticiasService } from "./servicios/noticias/noticias.service";
import{ExportexcelService} from './servicios/exportexcel/exportexcel.service'
//Animaciones
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Elementos web
import { ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//LIBRERIAS EXTERNAS
import { NgxSpinnerModule } from 'ngx-spinner';
//Formulario
import { ReactiveFormsModule } from "@angular/forms";
//Componentes
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/principal/menu/menu/menu.component';
import { FooterComponent } from './componentes/principal/footer/footer/footer.component';
import { HomeComponent } from './componentes/principal/home/home/home.component';
import { Page404Component } from './componentes/paginaerror/page404/page404.component';
import { TablageneralComponent } from './componentes/informacion/tablas/tablageneral/tablageneral.component';
import { ConceptoComponent } from './componentes/informacion/coronavirus/concepto/concepto/concepto.component';
import { GraficagralComponent } from './componentes/informacion/estadisticas/graficas/graficagral/graficagral/graficagral.component';
import { GraficadptoComponent } from './componentes/informacion/estadisticas/graficas/graficadpto/graficadpto/graficadpto.component';
import { GraficamunicipioComponent } from './componentes/informacion/estadisticas/graficas/graficamunicipio/graficamunicipio/graficamunicipio.component';
import { TabladptoComponent } from './componentes/informacion/tablas/tabladpto/tabladpto.component';
import { TablamunicipalComponent } from './componentes/informacion/tablas/tablamunicipal/tablamunicipal.component';
import { TiposComponent } from './componentes/informacion/coronavirus/tipos/tipos/tipos.component';
import { CausasComponent } from './componentes/informacion/coronavirus/causas/causas/causas.component';
import { ExtrasComponent } from './componentes/informacion/coronavirus/extras/extras/extras.component';
import { SintomasComponent } from './componentes/informacion/coronavirus/sintomas/sintomas/sintomas.component';
import { PrevencionComponent } from './componentes/informacion/coronavirus/prevencion/prevencion/prevencion.component';
import { TratamientosComponent } from './componentes/informacion/coronavirus/tratamientos/tratamientos/tratamientos.component';
import { AportesComponent } from './componentes/aportes/aportes/aportes.component';
import { NoticiasComponent } from './componentes/noticias/noticias/noticias.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    Page404Component,
    TablageneralComponent,
    ConceptoComponent,
    GraficagralComponent,
    GraficadptoComponent,
    GraficamunicipioComponent,
    TabladptoComponent,
    TablamunicipalComponent,
    TiposComponent,
    CausasComponent,
    ExtrasComponent,
    SintomasComponent,
    PrevencionComponent,
    TratamientosComponent,
    AportesComponent,
    NoticiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
  ],
  providers: [
    DatosService,
    ChatService,
    NoticiasService,
    ExportexcelService,
    {provide: ErrorHandler},
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  bootstrap: [AppComponent]
})
export class AppModule { }
