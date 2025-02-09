import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { ServiciosService } from '../services/servicios.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterModule,
    MatToolbarModule, 
    MatIconModule, 
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  modalVisible: boolean = false;
  email: string = '';
  pass: string = '';
  nombre: string = '';

  constructor(private serviciosService: ServiciosService, private router: Router) { }

  abrirModalRegistrar() {
    this.modalVisible = true;
  }

  cerrarModal() {
    this.modalVisible = false;
  }

  cerrarSesion() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  registrar() {
    this.serviciosService.registrarUsuario(this.email, this.pass, this.nombre).subscribe(response => {
      alert('Usuario registrado, ahora puede iniciar sesión con su correo y contraseña');
      console.log('Usuario registrado:', response);
      this.cerrarModal();
    }, error => {
      alert('Error al registrar usuario');
      console.error('Error al registrar usuario:', error);
    });
  }
}
