import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CadastrarTaskService {

  private baseUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  saveCadastroTask(task: any):Observable<any>{
    console.log(task)
    return this.http.post(`${this.baseUrl}/tarefas`, task);
  }
}
