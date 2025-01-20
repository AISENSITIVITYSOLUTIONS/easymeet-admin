import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    // Aquí puedes verificar el estado de autenticación
    // Si el usuario ya está autenticado, redirige a otra ruta
    // if (this.authService.isAuthenticated()) {
    //   this.router.navigate(['/dashboard']); // Redirige si ya está autenticado
    // }
  }
}
