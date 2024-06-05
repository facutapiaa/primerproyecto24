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
    const inicial = {
      email: this.inicio.email,
      password: this.inicio.password,
      nombre: this.inicio.nombre,
      apellido: this.inicio.apellido,
      rol: this.inicio.rol,
      uid: this.inicio.uid,
    }

    //metemos la constante dentro de la coleccion
    this.coleccionInicio.push(inicial);

    //traemos los datos del registro
    const contraseña =localStorage.getItem('contraseña')
    const correo =localStorage.getItem('email')

    //condicionales para  iniciar session
    if(contraseña===this.inicio.password && this.inicio.email){
      alert("se inicio sesion")
    }else{
      alert("tamos mal papito")
    } 
  }
}


 /*const datos = localStorage.getItem('user')
     if (datos) {
      const usuario = JSON.parse(datos)
      console.log(usuario)
      for (let i = 0; i <= usuario.length; i++) {
        if (usuario.email === this.inicio.email) {
          if (usuario.password === this.inicio.password) {
            alert("se inicio correctamente sesion")
          }
        }
      }
    }*/

