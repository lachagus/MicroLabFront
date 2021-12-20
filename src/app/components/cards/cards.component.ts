import { Component, OnInit } from '@angular/core';
import { ServiciosService, servicio } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  servicios: servicio[] = [];

  // Tenemos acceso a todos los puntos y varianles que hayan en el servicio
  constructor(private serviciosSvc: ServiciosService) {
    //this.servicios = this.serviciosSvc.servicios;
    this.serviciosSvc.getServicios().subscribe((servicios) => {
      console.log(servicios);
      this.servicios = servicios;
      });
   }

  ngOnInit(): void {
  }

  navigate(){
    console.log('click');
  }

  // recibir($event: DatosHijos) {
  //   console.log('recibido', $event);
  // }

}

interface DatosHijos {
  message: string;
  component: string;
}