import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  servicio: any;

// Escucha los cambios de cada card (servicio)el actRoute se puede llamar como querramos
  constructor(private actRoute: ActivatedRoute, private serviciosSVC: ServiciosService) {
    //Es un observable cuando se suscribe y todo lo que pase en él se informa, en este caso el cambio de rutas
    this.actRoute.params.subscribe(( params ) => {
      this.servicio = this.serviciosSVC.getServicio(params['id']);
      console.log(this.servicio);
    });

   }

  ngOnInit(): void {
  }

}
