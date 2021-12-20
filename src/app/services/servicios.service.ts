// Movemos el arreglo de cards acá

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { compileDeclareNgModuleFromMetadata } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Analisis, Obrasocial } from '../models/api-models';


@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  
  initialServicios: servicio[] = [
    {
      codigo: 1,
      nombre: "Analisis",
      imagen: 'assets/img/Indicaciones.svg',
      descripcion:'Aquí podrá consultar como debe prepararse para concurrir al laboratorio, según los análisis solicitados por su Médico.',
    },
      
    {
      codigo: 2,
      nombre: "Obras Sociales",
      imagen: 'assets/img/ObraSocial.svg',
      descripcion: 'Listado de las obras sociales que atendemos. Si no encuentra su cobertura médica utilice el formulario de contacto para consultarnos.',
    },
    
    {
      codigo: 3,
      nombre: "Autorizaciones",
      imagen: 'assets/img/Autorizaciones.svg',
      descripcion: 'Ingrese a esta sección para iniciar el trámite de autorización de sus ordenes de análisis y agilizar su atención el día de la extracción.',
    },
    
    {
      codigo: 4,
      nombre: "Domicilios",
      imagen: 'assets/img/Domicilio.svg',
      descripcion: 'Complete el formulario para solicitar la toma de las muestras en su domicilio.',
    },
    
    {
      codigo: 5,
      nombre: "Presupuestos",
      imagen: 'assets/img/Presupuesto.svg',
      descripcion: 'Completando el formulario a continuación podrá solicitar un presupuesto para sus análisis.',
    },
    
    {
      codigo: 6,
      nombre: "Formulario de Contacto",
      imagen: 'assets/img/FormularioContacto.svg',
      descripcion: 'Complete el formulario para solicitar información adicional.',
    },

  ];

  constructor(private http: HttpClient) {}  

  servicios$: BehaviorSubject<servicio[]> = new BehaviorSubject(this.initialServicios);

  getServicios(): Observable<servicio[]> {
    return this.servicios$.asObservable();
  }
  
  getAnalisis() {
    return this.http.get<Analisis>(`${environment.baseUrl}analisis`);
  }

  getObraSocial() {
    return this.http.get<Obrasocial>(`${environment.baseUrl}obrasocial`);
  }

  filteredServicios(text: string) {
    console.log (text);
      const filteredServicios = this.servicios$.value.filter((servicio) => 
        servicio.nombre.toLowerCase().includes(text.toLowerCase())
    );    
      this.servicios$.next(filteredServicios);
    }

  resetServicios(){
      this.servicios$.next(this.initialServicios);
    }
}

    export interface servicio {
      codigo: number
      nombre: string
      imagen: string
      descripcion: string
    }

