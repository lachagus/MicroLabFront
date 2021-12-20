// Movemos el arreglo de cards acá

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  servicios: any [] = [
    {
      id: 1,
      nombre: "Indicaciones",
      imagen: 'assets/Indicaciones.svg',
      descripcion:'Aquí podrá consultar como debe prepararse para concurrir al laboratorio, según los análisis solicitados por su Médico.',
      },
      
      {
      id:2,
      nombre:"Obras Sociales",
      imagen: 'assets/ObraSocial.svg',
      descripcion: 'Listado de las obras sociales que atendemos. Si no encuentra su cobertura médica utilice el formulario de contacto para consultarnos.',
      },
      
      {
      id:3,
      nombre: "Autorizaciones",
      imagen: 'assets/Autorizaciones.svg',
      descripcion: 'Ingrese a esta sección para iniciar el trámite de autorización de sus ordenes de análisis y agilizar su atención el día de la extracción.',
      },
      
      {
      id:4,
      nombre: "Domicilios",
      imagen: 'assets/Domicilio.svg',
      descripcion: 'Complete el formulario para solicitar la toma de las muestras en su domicilio.',
      },
      
      {
      id:5,
      nombre:"Presupuestos",
      imagen:'assets/Presupuesto.svg',
      descripcion:
      'Completando el formulario a continuación podrá solicitar un presupuesto para sus análisis.',
      },
      
      {
      id:6,
      nombre:"Formulario de Contacto",
      imagen:'assets/FormularioContacto.svg',
      descripcion: 'Complete el formulario para solicitar información adicional.',
      },
    ];

  constructor() { }

  // Devuelve uno de los servicios de todos los servicios que ofrece el lab (cards)
  getServicio(id: number){
  // Se le pone el ID porque se corresponde el lugar del array con el ID del this.servicios, sino this.servicios.id === id
    return this.servicios[id];
  }
}
