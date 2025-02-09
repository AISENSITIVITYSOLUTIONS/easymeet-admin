import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private apiUrlBase = 'https://em1-gmbwh0hqa0gceedw.canadaeast-01.azurewebsites.net';

  constructor(private http: HttpClient) { }

  registrarUsuario(email: string, pass: string, nombre: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'ApiKey': '_$4DM1N$_'
    });

    const body = {
      email: email,
      pass: pass,
      nombre: nombre
    };

    return this.http.post(`${this.apiUrlBase}/admin/registro`, body, { headers });
  }

  iniciarSesion(email: string, pass: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'ApiKey': '_$4DM1N$_'
    });

    const body = {
      email: email,
      pass: pass
    };

    return this.http.post(`${this.apiUrlBase}/admin/login`, body, { headers });
  }


  obtenerMeets(page: number = 1): Observable<any> {
    const headers = new HttpHeaders({
      'ApiKey': '_$4DM1N$_'
    });

    return this.http.get(`${this.apiUrlBase}/admin/meets?page=${page}`, { headers });
  }
}
