import { Component, OnInit } from '@angular/core';
import { ServiciosService } from "src/app/services/servicios.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  search: string = '';
  clear: boolean= false;
  constructor(private servisios: ServiciosService){}
  
  ngOnInit(): void {
  }

  filter($event: any){
    $event.preventDefault();
    this.servisios.filteredServicios(this.search.trim());
    this.search = '';
    this.clear= true;
  }
  onclear() {
    this.servisios.resetServicios();
    this.clear = false;
  }
}
