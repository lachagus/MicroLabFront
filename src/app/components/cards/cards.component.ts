import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  servicios: any[] = [];

  // Tenemos accesos a todos los puntos y varianles que hayan en el servicio
  constructor(private serviciosSVC: ServiciosService) {
    this.servicios = this.serviciosSVC.servicios;
   }

  ngOnInit(): void {
  }

  navigate(){
    console.log('click');
  }

  recibir($event: DatosHijos) {
    console.log('recibido', $event);
  }

}

interface DatosHijos {
  message: string;
  component: string;
}