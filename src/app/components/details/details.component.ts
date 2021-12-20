import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { Analisis, Datum } from 'src/app/models/api-models';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
  analisis: Datum[] = [];
  
  constructor(private servsrv: ServiciosService){
    this.servsrv.getAnalisis().subscribe((resp)=> {
      console.log('rta:', resp);
       this.analisis= resp.data;
    });

   }

  ngOnInit(): void {
  }

  navigate() {
    console.log('click');
  }

}
