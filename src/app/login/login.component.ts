import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiciosService } from '../services/servicios.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private serviciosService: ServiciosService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    // Aquí puedes verificar el estado de autenticación
    // Si el usuario ya está autenticado, redirige a otra ruta
    // if (this.authService.isAuthenticated()) {
    //   this.router.navigate(['/dashboard']); // Redirige si ya está autenticado
    // }
  }

  login() {
    if (this.loginForm.valid) {
      const { email, pass } = this.loginForm.value;
      this.serviciosService.iniciarSesion(email, pass).subscribe(
        response => {
          localStorage.setItem('user', JSON.stringify(response));
          this.router.navigate(['/dashboard']);
        },
        error => {
          console.error('Error de inicio de sesión', error);
        }
      );
    }
  }
}
