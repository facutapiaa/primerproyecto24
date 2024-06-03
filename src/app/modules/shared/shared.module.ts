import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

//componentes del toolbar
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

//import para acceder a las rutas
import { AppRoutingModule } from 'src/app/app-routing.module';

//componentes boton
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule
  ],
  exports:[
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    NavbarComponent,
    FooterComponent,
    MatMenuModule
  ]
})
export class SharedModule { }
