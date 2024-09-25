import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabitoService {

  private baseUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getHabitosByUsuario(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/habitos/${id}`);
  }

  saveHabitos(habitos: any): Observable<any> {
    console.log(habitos)
    return this.http.post(`${this.baseUrl}/habitos`, habitos);
  }
}
