import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomeComponent } from './home/home.component';
import { EmReportsComponent } from './em-reports/em-reports.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    DashboardComponent,
    EmReportsComponent,
    HomeComponent,
    PublicacionesComponent,
    UsuariosComponent,
    ConfiguracionComponent,
    MatTableModule,
    MatDialogModule,
    MatCardModule,
    MatPaginatorModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule
  ]
})
export class DashboardModule { }

