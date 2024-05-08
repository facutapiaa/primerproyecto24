import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
//importamos interfaz
import { Animal } from 'src/app/models/animal';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {  
  //propiedad publica (tipo array)
  public info: Animal[];

  //el constructor inicializa la propiedad "info"
  constructor(){
    this.info = [
      {
        id:"",
        edad: 1,
        nombre:"pedro",
        raza:"pitbull",
        imagen:"https://www.elmueble.com/medio/2023/03/07/perro-de-raza-pitbull-blue_736b92b8_230307213909_1000x667.jpg",
        alt:"perro gordito"
      },
      {
        id:"",
        edad:4,
        nombre:"pedro",
        raza:"Doberman",
        imagen:"https://dinastiacachorros.com.co/wp-content/uploads/2022/09/Img-Dinastia-del-Cachorro-Home-Razas-Doberman.jpg",
        alt:"perro flaco"
      },
      {
        id:"",
        edad: 4,
        nombre:"pedro",
        raza:"Hot DOG",
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxSY764wA06zdXEGMRZuCWscPJppYFd4pcm6QpF7jqJw&s",
        alt:"perro salchicha gordo bachicha"
      }
    ]
  }
}
