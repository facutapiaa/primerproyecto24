import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';

//FIREBASE -> importamos herramientas de la base de datos
import { environment } from 'src/environments/environments'; //vinculaa la BD con la app
import {AngularFireModule} from '@angular/fire/compat' //trabaja con la coleccion de informacion
import { AngularFireAuthModule} from '@angular/fire/compat/auth'; //trabaja con la autentificacion
import { AngularFireStorageModule} from '@angular/fire/compat/storage' //trabaja con imagenes y archivos

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    //vinculacion FireBase
    AngularFireModule.initializeApp(environment.firebaseConfig), //inicializar la firebase dentro del proyecto
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
