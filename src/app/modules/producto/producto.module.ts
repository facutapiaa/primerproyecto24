import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductComponent } from './pages/product/product.component';
import { AlimentosComponent } from './pages/alimentos/alimentos.component';
import { JuguetesComponent } from './pages/juguetes/juguetes.component';
import { RopitaComponent } from './pages/ropita/ropita.component';


@NgModule({
  declarations: [
    ProductComponent,
    AlimentosComponent,
    JuguetesComponent,
    RopitaComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],
  exports:[
    ProductComponent,
    AlimentosComponent,
    JuguetesComponent,
    RopitaComponent
  ]
})
export class ProductoModule { }
