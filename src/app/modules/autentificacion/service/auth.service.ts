import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) { }

  //FUNCION PARA REGISTRO
  registar(email:string, password:string){
    //Retorna el valor que es creado con el metodo "createemail"
    return this.auth.createUserWithEmailAndPassword(email,password)
  }

  //FUNCION PARA INICIAR SESION
  IniciarSesion(email:string, password:string){
    //validar la informacion del usuario -> saber si existe en la coleccion 
    return this.auth.signInWithEmailAndPassword(email,password)
  }

  //FUNCION PARA CERRAR SESION
CerrarSesion(){ 
  return this.auth.signOut()
}


//funcion para tomar el UID
async obtenerUID(){
  //nos va a generar una promesa y la constante la va a capturar
  const user =await this.auth.currentUser

  if(user == null){
    return null
  }else{
    return user.uid
  }
}

}
