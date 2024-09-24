import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getTaskByUsuario(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/tarefas/${id}`);
  }

  saveTask(task: any): Observable<any> {
    console.log(task)
    return this.http.post(`${this.baseUrl}/tarefas`, task);
  }

  concluirTask(id: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.baseUrl}/tarefas/concluirTarefa?idTarefa=${id}`, null, { headers });
  }
}  