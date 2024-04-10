import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modulos/inicio/inicio.component';
import { GaleriaComponent } from './modulos/galeria/galeria.component';
import { ServiciosComponent } from './modulos/servicios/servicios.component';

const routes: Routes = [
  {path:"inicio",component:InicioComponent},
  {path:"galeria",component:GaleriaComponent},
  {path:"servicios",component:ServiciosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
