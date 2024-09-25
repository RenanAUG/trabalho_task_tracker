import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {

  private baseUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  saveUsuario(usuario: any): Observable<any> {
    console.log(usuario)
    return this.http.post(`${this.baseUrl}/usuario`, usuario);
  }
}
