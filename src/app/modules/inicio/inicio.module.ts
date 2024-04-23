import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//inicio
import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
//componente
import { CardComponent } from './components/card/card.component';
//componentes de card
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    InicioComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  exports:[
    MatButtonModule,
    MatCardModule
  ]
})
export class InicioModule { }
