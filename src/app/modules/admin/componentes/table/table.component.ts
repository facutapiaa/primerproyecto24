import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  //creamos collecion local de productos  -> la definimos como array
  coleccionProductos: Producto[] = [];

  productoSeleccionado!: Producto; //toma valores vacios

  modalVisibleProducto: Boolean= false

  //definimos formulario para los productos
  producto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    descripcion: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    img: new FormControl('', Validators.required),
  })

  constructor(public servicioCroud: CrudService) { }

  ngOnInit(): void { 
    this.servicioCroud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto
    }) 

  }

  async agregarProducto() {
    if (this.producto.valid) {
      let nuevoProducto: Producto = {
        idProducto: '',
        nombre: this.producto.value.nombre!,
        precio: this.producto.value.precio!,
        descripcion: this.producto.value.descripcion!,
        categoria: this.producto.value.categoria!,
        img: this.producto.value.img!,
      }

      await this.servicioCroud.crearproducto(nuevoProducto)
        .then(producto => {
          alert("ha agregado un nuevo prouducto con exito")
      })
        .catch(error => {
          alert("ha ocurrido un error al cargar el producto")
      })
    }
  }

  
  mostarBorrar(productoSeleccionado: Producto){
    this.modalVisibleProducto = true;
    this.productoSeleccionado = productoSeleccionado;
  }


  borrarProducto(){
    this.servicioCroud.eliminarProductos(this.productoSeleccionado.idProducto)
    .then(respuesta=>{
      alert("se ha podido eliminar con exito")
    })
    .catch(error=>{
      alert("ha ocurrido un error al eliminar un producto \n"+error)
    })
  }
}
