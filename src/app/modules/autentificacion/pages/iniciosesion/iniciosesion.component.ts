import { FocusTrap } from '@angular/cdk/a11y';
import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})

export class IniciosesionComponent {
  hide = true;

  //importar la interfaz de usuario inizialisada
  inicio: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: '',
  }

  //creamos una coleccion de usuarios tipo 'usuario' para arrays
  coleccionInicio: Usuario[] = []

  //creamos la funcion crear que se activa con el boton
  iniciar() {
    const cuenta = {
      email: this.inicio.email,
      password: this.inicio.password,
      nombre: this.inicio.nombre,
      apellido: this.inicio.apellido,
      rol: this.inicio.rol,
      uid: this.inicio.uid,
    }

    //metemos la constante dentro de la coleccion
    const sUsuarioEncontrado = localStorage.getItem(cuenta.email)
    if (sUsuarioEncontrado) {
      //convertimos el objeto en string
      const oUsuarioEncontrado = JSON.parse(sUsuarioEncontrado)
      const contrasena = oUsuarioEncontrado.password
      if (contrasena == cuenta.password) {
        alert("Inicio correctamente, bienvenido " + oUsuarioEncontrado.nombre)
      }else{
        ("algo se ha ingreso mal")
      }
    }else{
      console.log("no hay nada en el local storage")
    }

  }
}
