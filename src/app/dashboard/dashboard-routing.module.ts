import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmReportsComponent } from './em-reports/em-reports.component';
import { HomeComponent } from './home/home.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { DashboardComponent } from './dashboard.component'; // Contenedor principal
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '', 
    component: DashboardComponent,
    children: [
      { path: 'reportes', component: EmReportsComponent },
      { path: 'configuracion', component: ConfiguracionComponent },
      { path: 'dashboard', component: HomeComponent },
      { path: 'publicaciones', component: PublicacionesComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
