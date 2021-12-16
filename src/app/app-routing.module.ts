import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  {
    pathMatch: 'full',
    path:'',
    component: GaleriaComponent
  },
  {
    pathMatch: 'full',
    path:'galeria',
    component: GaleriaComponent
  },
  {
    pathMatch: 'full',
    path: 'estadisticas',
    component: DashboardComponent
  },
  {
    pathMatch: 'full',
    path: 'contacto',
    component: ContactoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
