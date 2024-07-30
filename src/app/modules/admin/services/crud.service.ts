import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


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
  //EDITAR productos
  //ELIMINAR productos
}
