import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  //input de la contraseña para que no se vean los caracteres
  hide = true;

  //importar la interfaz de usuario inizialisada
  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: '',
  }

  //creamos una coleccion de usuarios tipo 'usuario' para arrays
  coleccionUsuarios: Usuario[] = []

  //funcion para el registro de nuevos usuarios
  registrar() {
    //constante que guarda la informacion que ingresa el usuario
    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password,
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      rol: this.usuarios.rol,

    }

    //enviamos nueva informacion como un nuevo objeto a la coleccion de usuarios
    this.coleccionUsuarios.push(credenciales);

    alert("te registraste con exito")

    //lamamos a la funcion para ejecutarla
    this.limpiarInputs();

    //usamos local storage para guardar los datos
    localStorage.setItem('email', this.usuarios.email)
    localStorage.setItem('contraseña', this.usuarios.password)
    /*
    localStorage.setItem('user', JSON.stringify(this.coleccionUsuarios))
    */
  }

  //funcion para limpiar inputs
  limpiarInputs() {

    //en la constante inputs llamamos los atributos y los inicializamos vacios
    const inputs = {
      email: this.usuarios.email = '',
      password: this.usuarios.password = '',
      uid: this.usuarios.uid = '',
      nombre: this.usuarios.nombre = '',
      apellido: this.usuarios.apellido = '',
      rol: this.usuarios.rol = '',
    }
  }
}
