import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { DetailsComponent } from './components/details/details.component';


const routes: Routes = [
  
  {path: '',
  redirectTo: 'home',
  pathMatch: 'full'
  },
  //Y como saqué las vistas de las Cards en el componet html, agrego esto
  {path: 'home',
  component: CardsComponent
  },

  //Componente que quiero que me muestre por id porque acepta parámetros que pueden ir variando
  {path: 'details/:id',
  component: DetailsComponent
  },

  {path: '**',
  redirectTo: 'home',
  pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
