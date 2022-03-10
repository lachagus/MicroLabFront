import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { CardsComponent } from './components/cards/cards.component';
import { DetailsComponent } from './components/details/details.component';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ObrasocialesComponent } from './components/obrasociales/obrasociales.component'
import { FormsModule } from '@angular/forms';
import { AltaComponent } from './components/alta/alta.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { AutorizacionesComponent } from './components/autorizaciones/autorizaciones.component';
import { PresupuestosComponent } from './components/presupuestos/presupuestos.component';
import { InstitucionalComponent } from './components/institucional/institucional.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    CardsComponent,
    DetailsComponent,
    SearchComponent,
    FooterComponent,
    HeaderComponent,
    ObrasocialesComponent,
    AltaComponent,
    ModificarComponent,
    AutorizacionesComponent,
    PresupuestosComponent,
    InstitucionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
