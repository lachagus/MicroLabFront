import { Component, OnInit } from '@angular/core';
import { Datum, Obrasocial } from 'src/app/models/api-models';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-obrasociales',
  templateUrl: './obrasociales.component.html',
  styleUrls: ['./obrasociales.component.scss']
})
export class ObrasocialesComponent implements OnInit {

  osociales: Datum[] = []

  constructor(private servsrv: ServiciosService){
    this.servsrv.getObraSocial().subscribe((resp)=> {
      console.log('rta:', resp);
      this.osociales= resp.data;
    });
  }

  ngOnInit(): void {
  }

  navigate() {
    console.log('click');
  }

}
