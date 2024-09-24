import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/login.service';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CadastroUsuarioService } from '../../services/cadastro-usuario.service';
import { TaskService } from '../../services/task.service';
import { SharedService } from '../../services/shared.service';

interface Task {
  id: number,
  descricao: string,
  data_inicio: Date,
  data_limite: Date,
  concluida: false
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {

  tasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    private sharedService: SharedService,
    private readonly router: Router,
  ) {
  }

  ngOnInit(): void {
    this.taskService.getTaskByUsuario(this.sharedService.getUsuario()).pipe(
      tap((data: Task[]) => {
        this.tasks = data; // Atribua a lista de tarefas à variável
        console.log(this.tasks);
      },
    ))
    .subscribe();
  }

  adicionarTask() {
    this.router.navigate(['/cadastrar-task']);
  }

  concluirTask(id : number) {
    console.log(id)
    this.taskService.concluirTask(id).subscribe()
  }

}
