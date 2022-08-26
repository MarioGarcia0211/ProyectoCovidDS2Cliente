import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Componentes
import { HomeComponent} from './componentes/principal/home/home/home.component'
import { Page404Component } from './componentes/paginaerror/page404/page404.component';
import { TablageneralComponent } from './componentes/informacion/tablas/tablageneral/tablageneral.component';
import { TabladptoComponent } from './componentes/informacion/tablas/tabladpto/tabladpto.component';
import { TablamunicipalComponent } from './componentes/informacion/tablas/tablamunicipal/tablamunicipal.component';
import{ GraficagralComponent} from './componentes/informacion/estadisticas/graficas/graficagral/graficagral/graficagral.component';
import { GraficadptoComponent } from "./componentes/informacion/estadisticas/graficas/graficadpto/graficadpto/graficadpto.component";
import { GraficamunicipioComponent } from "./componentes/informacion/estadisticas/graficas/graficamunicipio/graficamunicipio/graficamunicipio.component";
import { CausasComponent } from "./componentes/informacion/coronavirus/causas/causas/causas.component";
import { TiposComponent } from "./componentes/informacion/coronavirus/tipos/tipos/tipos.component";
import { ConceptoComponent } from "./componentes/informacion/coronavirus/concepto/concepto/concepto.component";
import { ExtrasComponent } from "./componentes/informacion/coronavirus/extras/extras/extras.component";
import { SintomasComponent } from "./componentes/informacion/coronavirus/sintomas/sintomas/sintomas.component";
import { TratamientosComponent } from "./componentes/informacion/coronavirus/tratamientos/tratamientos/tratamientos.component";
import { PrevencionComponent } from "./componentes/informacion/coronavirus/prevencion/prevencion/prevencion.component";
import { AportesComponent } from "./componentes/aportes/aportes/aportes.component";
import { NoticiasComponent } from "./componentes/noticias/noticias/noticias.component";

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'noticias', component: NoticiasComponent},
  {path: 'aportes', component: AportesComponent},
  {path: 'concepto', component: ConceptoComponent},
  {path: 'causas', component: CausasComponent},
  {path: 'tipos', component: TiposComponent},
  {path: 'extras', component: ExtrasComponent},
  {path: 'sintomas', component: SintomasComponent},
  {path: 'prevencion', component: PrevencionComponent},
  {path: 'tratamientos', component: TratamientosComponent},
  {path: 'tablagral', component: TablageneralComponent},
  {path: 'tabladpto', component: TabladptoComponent},
  {path: 'tablamunicipal', component: TablamunicipalComponent},
  {path: 'graficasgenerales', component: GraficagralComponent},
  {path: 'graficasdpto', component: GraficadptoComponent},
  {path: 'graficasmunicipio', component: GraficamunicipioComponent},
  {path: '**', component: Page404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
