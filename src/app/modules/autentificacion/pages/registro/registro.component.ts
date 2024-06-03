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

  //creamos una coleccion de usuarios tipoo 'usuario' para arrays
  coleccionUsuarios: Usuario[] = []

  //funcion para el registro de nuevos usuarios
  registrar() {
    //constante que guarda la informacion que ingresa el usuario
    const credenciales = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password
    }
    //mostramos las credenciales por consola
    console.log(credenciales)
  }
}

