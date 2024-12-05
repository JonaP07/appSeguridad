import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },  
  { path: 'about', component: AboutComponent },   
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Redirige a Inicio por defecto
  { path: '**', redirectTo: '/inicio' } // Redirige rutas no encontradas a Inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
