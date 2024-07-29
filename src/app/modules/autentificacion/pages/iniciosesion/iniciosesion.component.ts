import { FocusTrap } from '@angular/cdk/a11y';
import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
import { AuthService } from '../../service/auth.service';
import * as CryptoJs from 'crypto-js';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})

export class IniciosesionComponent {
  hide = true;
  constructor(
    public servicioAuth: AuthService,
    public servicioRutas: Router,
    public servcioFirestore: FirestoreService
  ) { }



  //importar la interfaz de usuario inizialisada
  usuario: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: '',
  }



  //creamos la funcion crear que se activa con el boton
  async iniciar() {
    const credenciales = {
      email: this.usuario.email,
      password: this.usuario.password,
    }

    
    try {
      const usuarioBD = await this.servicioAuth.ObtenerUsuario(credenciales.email)

      //condicional verificada que ese usuario de la BD existiera o que sea igual al de nuestra coleccion
      if (!usuarioBD || usuarioBD.empty) {
        Swal.fire({
          title: "¡Ocurrio un error!",
          text: "Error al leer el correo",
          icon: "error"
        });;
        this.limpiarInputs();
        return;
      } 

      //vinvulaba al primer documento  de la coleccion "usuarios" que se obtenia de la base de datos
      const usuarioDoc = usuarioBD.docs[0];
      //extrae los datos del documento en forma de objeto y se especifica que va a ser de tipo usuario (se refiere a la interfaz usuario)
      const usuarioData = usuarioDoc.data() as Usuario;
      //encripta la contraseña que el usuario manda al iniciar sesion
      const hashedPassword = CryptoJs.SHA256(credenciales.password).toString();

      //compara la contraseña que acabamos de encriptar y que el usuario envio con la que recibimos del "usuarioData"
      if (hashedPassword !== usuarioData.password) {
        alert("contraseña incorrecta")

        this.usuario.password = '';
        return
      }

      const res = await this.servicioAuth.IniciarSesion(credenciales.email, credenciales.password)
        //metemos la constante dentro de la coleccion

        .then(res => {
          Swal.fire({
            title: "¡Se ha iniciado sesion",
            text: "Se inicio sesion correctamente",
            icon: "success"
          });

          this.servicioRutas.navigate(['/inicio'])
        })
        .catch(err => {
          Swal.fire({
            title: "¡Tan inutil vas a ser >:(!",
            text: "Hubo un error en la contraseña",
            icon: "error"
          });

          this.limpiarInputs();
        })
    } catch(error){
      this.limpiarInputs();
    }
    }
  


  limpiarInputs() {
    //en la constante inputs llamamos los atributos y los inicializamos vacios
    const inputs = {
      email: this.usuario.email = '',
      password: this.usuario.password = '',
    }
  }
}
