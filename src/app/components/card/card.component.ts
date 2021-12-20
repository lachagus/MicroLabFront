import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  // Con este input recibe los datos desde el padre, o sea la variable servicio
  @Input() servicio:any = {}

  //Desde afuera lo mandan como index pero adentro lo usa como i 
  @Input('index') i:number = 0

  @Output('enviarDatos') enviar = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // navigate(){
  //   console.log('click');

  avisarleAlPapa(){
    console.log('click hijo');
    this.enviar.emit({
      message: 'Mensajito a papá',
      Component: 'CardComponent',
    });
  }

}
