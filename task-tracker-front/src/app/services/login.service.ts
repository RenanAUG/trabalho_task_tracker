import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  private baseUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any> {
    return this.http.get(`${this.baseUrl}/usuario`); //faz a requisição get pra api
  }

  saveUsuario(usuario: any): Observable<any> {
    console.log(usuario)
    return this.http.post(`${this.baseUrl}/usuario`, usuario);
  }
}