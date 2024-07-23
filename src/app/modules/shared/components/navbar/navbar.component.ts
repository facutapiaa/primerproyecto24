import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/autentificacion/service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  logueado= true; //booleana para manejar el inicio sesion y registro
  deslogueado=false; //booleana para manejar el cierre sesion 

  constructor(
    public servicioAuth:AuthService,
    public servicioRutas:Router

  ){}

  //funcion que invierte los valores
  ingresar(){
    this.logueado= false;
    this.deslogueado= true
  }

  cerrarSesion(){
    this.logueado= true;
    this.deslogueado= false
    
    //llamamos al metodo de 'cerrar sesion' para limpiar el 'token'
    this.servicioAuth.CerrarSesion();

    //redirigimos a la raiz de la pagina
    this.servicioRutas.navigate(['/'])
  }



}
