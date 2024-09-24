import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Habito } from './habito.model';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-habito',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './habito.component.html',
  styleUrl: './habito.component.css'
})
export class HabitoComponent{
  dataAtual = new Date();
  habitos = [
      {
          descricao: 'Exercitar-se',
          dias: {
              semana: [false, false, false, false, false] // Segunda a Sexta
          }
      },
      {
          descricao: 'Ler um livro',
          dias: {
              semana: [false, false, false, false, false]
          }
      },
      // Adicione outros hábitos conforme necessário
  ];

  constructor(
    private readonly router: Router
  ) {}

  adicionarHabitos() {
    this.router.navigate(['/cadastrar-habito']);
  }

  isHoje(dia: number): boolean {
    // 0: Segunda, 1: Terça, 2: Quarta, 3: Quinta, 4: Sexta
    const hoje = this.dataAtual.getDay(); // 0: Domingo, 1: Segunda, ..., 6: Sábado
    // Ajusta para segunda a sexta
    return dia === (hoje === 0 ? 6 : hoje - 1); // Se hoje for domingo (0), retorna 6 (Sábado não está habilitado)
  }
}

