import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirestoreService } from '../../shared/services/firestore.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth, 
    private servicioFirestore: AngularFirestore

  ) { }

  //FUNCION PARA REGISTRO
  registrar(email:string, password:string){
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

ObtenerUsuario(email:string){

  /* 
    retomamos del servicio firestore la coleccion de usuarios, buscamos una referecnia en los emails registrados 
    y los comparamos con lo que ingrese el usuario  al iniciar sesion y lo obtiene con el .get()
    Lo vuelve una promesa => que da un resultado sea resuelto o rechazado
  */
  return this.servicioFirestore.collection('usuarios', ref => ref.where('email','==',email)).get().toPromise();
}

}
