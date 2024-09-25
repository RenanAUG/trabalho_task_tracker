import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HabitoHistoricoService } from '../../services/habito-historico.service';
import { SharedService } from '../../services/shared.service';
import { HabitoService } from '../../services/habito.service';
import { tap } from 'rxjs';

interface Habito {
  id: number;
  descricao: string;
}

interface HabitosHistorico {
  id: number;
  data: number;
}


@Component({
  selector: 'app-habito',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './habito.component.html',
  styleUrls: ['./habito.component.css']
})
export class HabitoComponent {
  form: FormGroup;
  habitos: Habito[] = [];
  habitosHistoricos: HabitosHistorico[] = [];

  constructor(
    private readonly router: Router,
    private readonly sharedService: SharedService,
    private readonly habitoHistoricoService: HabitoHistoricoService, // Injeta o serviço
    private readonly habitoService: HabitoService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      data: ['', [Validators.required]],
    });

    this.buscarHabitos();
  }

  private buscarHabitos() {
    this.habitoService.getHabitosByUsuario(this.sharedService.getUsuario())
     .pipe(
      tap((data: Habito[]) => {
        this.habitos = data
      })
     )
     .subscribe();
  }

  adicionarHabitos() {
    this.router.navigate(['/cadastrar-habito']);
  }

  concluirHabito(habito: any) {
    const dataInformada = this.form.value.data; // Obtém a data informada do formulário
  
    if (dataInformada) {
      const dataInformadaTimestamp = new Date(dataInformada).getTime(); // Converte a data informada para timestamp
      const habitosHistoricos = {
        data: dataInformadaTimestamp,
        habitos_id: habito.id
      };
  
      // Primeiro, busque os hábitos históricos para verificar a data
      this.habitoHistoricoService.getHabitosHistoricosByHabito(habito.id)
        .pipe(
          tap((dados: HabitosHistorico[]) => {
            // Verifica se a data já existe no histórico
            const dataExistente = dados.some(h => h.data === dataInformadaTimestamp);
            if (dataExistente) {
              alert('Essa data já está cadastrada para o hábito selecionado.');
              return;
            } else {
              // Se não existir, salve o novo histórico
              this.habitoHistoricoService.saveHabitosHistoricos(habitosHistoricos).subscribe();
            }
          })
        )
        .subscribe();
  
      this.form.controls['data'].setValue("");
    } else {
      alert('Por favor, insira uma data antes de concluir.');
    }
  }
  
}
