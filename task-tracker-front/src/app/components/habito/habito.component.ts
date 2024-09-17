import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Habito } from './habito.model';

@Component({
  selector: 'app-habito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './habito.component.html',
  styleUrl: './habito.component.css'
})
export class HabitoComponent implements OnInit {
  habitos: Habito[] = [
    { id: 1, descricao: 'Ir academia', concluida: false },
    { id: 2, descricao: 'Beber 2 litros de água', concluida: true },
    { id: 3, descricao: 'Ler um livro', concluida: false },
  ];

  dataAtual: Date = new Date();

  constructor(
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.atualizarHabitos();
  }
  avancarDia() {
    // Avançar para o próximo dia
    this.dataAtual.setDate(this.dataAtual.getDate() + 1);
    this.atualizarHabitos();
  }

  atualizarHabitos() {
    // Lógica para atualizar a lista de hábitos com base na dataAtual
    // Você pode fazer uma chamada ao servidor para obter os hábitos para a data atual ou filtrar uma lista existente.
    // Exemplo:
    // this.habitos = this.habitosOriginais.filter(habito => this.isHabitoDoDia(habito, this.dataAtual));
  }

  isHabitoDoDia(habito: any, data: Date): boolean {
    // Lógica para verificar se um hábito é para o dia atual
    return true; // Substitua com a lógica apropriada
  }

  adicionarHabitos() {
    this.router.navigate(['/cadastrar-habito']);
  }
}
