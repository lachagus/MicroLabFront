import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  servicios: number [] = [1,2,3,4,5,6];

  constructor() { }

  ngOnInit(): void {
  }

}
