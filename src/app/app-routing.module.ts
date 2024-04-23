import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioModule } from './modules/inicio/inicio.module';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

const routes: Routes = [
  //ruta por defecto en la inicializacion
{path:"",component:InicioComponent},
//ruta perezosa
//ruta que nos vincula al modulo de inicio y todo su contenido 
//loadChildren: indica que habra una ruta hija
//.then funcion asincronica tipo promesa
{path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
