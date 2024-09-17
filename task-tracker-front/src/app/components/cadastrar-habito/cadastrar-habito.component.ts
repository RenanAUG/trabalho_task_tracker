import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-habito',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastrar-habito.component.html',
  styleUrl: './cadastrar-habito.component.css'
})
export class CadastrarHabitoComponent {

  constructor(private router: Router) {}

  onSubmit() {
    // Lógica para adicionar a tarefa
    // Por exemplo, chamar um serviço para salvar a tarefa
    // Redirecionar de volta para a lista de tarefas
    this.router.navigate(['/habito']);
  }
}
