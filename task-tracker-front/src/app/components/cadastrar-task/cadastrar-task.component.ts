import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastrar-task.component.html',
  styleUrl: './cadastrar-task.component.css'
})
export class CadastrarTaskComponent {

  constructor(private router: Router) {}

  onSubmit() {
    // Lógica para adicionar a tarefa
    // Por exemplo, chamar um serviço para salvar a tarefa
    // Redirecionar de volta para a lista de tarefas
    this.router.navigate(['/task']);
  }
}
