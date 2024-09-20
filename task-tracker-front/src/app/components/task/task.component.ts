import { Component, OnInit } from '@angular/core';
import { Task } from './task.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [
    { id: 1, descricao: 'Comprar mantimentos', data_inicio: new Date('2024-09-01'), data_limite: new Date('2024-09-15'), concluida: false },
    { id: 2, descricao: 'Ir ao banco', data_inicio: new Date('2024-09-02'), data_limite: new Date('2024-09-10'), concluida: true },
    { id: 3, descricao: 'Ler um livro', data_inicio: new Date('2024-09-03'), data_limite: new Date('2024-09-20'), concluida: false },
  ];

  constructor(
    private readonly router: Router
  ) {

  }

  ngOnInit(): void {
  }

  adicionarTask() {
    this.router.navigate(['/cadastrar-task']);
  }

}
