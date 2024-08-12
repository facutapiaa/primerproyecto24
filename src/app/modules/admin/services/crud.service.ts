import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //definimos coleccion para los productos de la web
  private productosCollection: AngularFirestoreCollection<Producto>

  constructor(private database: AngularFirestore) {
    this.productosCollection = database.collection('prodcuto');
  }

  //CREAR productos
  crearproducto(producto: Producto) {
    return new Promise(async (resolve, reject) => {
      try {
        const idProducto = this.database.createId()

        producto.idProducto

        const resultado = await this.productosCollection.doc(idProducto).set(producto)

        resolve(resultado);
      }
      catch(error){
        reject(error)
      }
    })
  }



  //OBTENER productos
  obtenerProducto(){
    /* 
      snapshotChanges => toma una captura del estado de los datos 
      pipe => tuberias que retornan un nuevo arreglo
      map => mapea es nueva informacion
      a => reguarda la nueva informacion y la envia como un documento
    */
    return this.productosCollection.snapshotChanges().pipe(map(Action => Action.map(a => a.payload.doc.data())))
  }

  //EDITAR productos
  modificarProducto(idProducto:string, nuevaData: Producto){
    /*
    accedemos a la coleccion 'productos' de la base de datos, buscamos el ID del nuevo producto seleccionado 
    y lo actualizamos con el metodo "update", enviando la nueva informacion
    */

    return this.database.collection('productos').doc(idProducto).update(nuevaData)
  }

  //ELIMINAR productos
  eliminarProductos(idProducto: string){
    return new Promise((resolve, reject) =>{
      try{
        const respuesta= this.productosCollection.doc(idProducto).delete();
        resolve (respuesta)
      }
      catch(error){
        reject(error);
      }
    })
  }
}
