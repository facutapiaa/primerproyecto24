import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { JuguetesComponent } from './pages/juguetes/juguetes.component';
import { AlimentosComponent } from './pages/alimentos/alimentos.component';
import { RopitaComponent } from './pages/ropita/ropita.component';

const routes: Routes = [
  {path:"producto",component:ProductComponent},
  {path:"juguetes",component:JuguetesComponent},
  {path:"alimentos",component:AlimentosComponent},
  {path:"ropita",component:RopitaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
