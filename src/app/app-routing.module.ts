import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaComponent } from './components/alta/alta.component';
import { AutorizacionesComponent } from './components/autorizaciones/autorizaciones.component';
import { CardsComponent } from './components/cards/cards.component';
import { DetailsComponent } from './components/details/details.component';
import { InstitucionalComponent } from './components/institucional/institucional.component';
import { ObrasocialesComponent } from './components/obrasociales/obrasociales.component';
import { PresupuestosComponent } from './components/presupuestos/presupuestos.component';


const routes: Routes = [
  
  {path: '',
  redirectTo: 'home',
  pathMatch: 'full'
  },
  //Y como saqué las vistas de las Cards en el componet html, agrego esto
  {path: 'home',
  component: CardsComponent
  },
  //Componente Alta desde NAVBAR
  {path: 'alta',
  component: AltaComponent
  },

   //Componente Institucional desde 
   {path: 'institucional',
   component: InstitucionalComponent
   },

    //Cada CARD del home que quiero que me muestre por id, porque acepta parámetros que pueden ir variando
  {
    path: 'details',
    children:[
      {path:'0',
      component: DetailsComponent,
      },

      {path:'1',
      component: ObrasocialesComponent,
      }, 

      {path:'2',
      component: AutorizacionesComponent
      },

      {path:'4',
      component: PresupuestosComponent
      },
    ]
  },

  {path: '**',
  redirectTo: 'home',
  pathMatch: 'full'
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
