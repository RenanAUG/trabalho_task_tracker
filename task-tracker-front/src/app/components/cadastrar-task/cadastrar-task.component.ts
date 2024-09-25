import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/login.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CadastroUsuarioService } from '../../services/cadastro-usuario.service';
import { SharedService } from '../../services/shared.service';
import { CadastrarTaskService } from '../../services/cadastrar-task.service';

interface Task {
  descricao: string,
  data_inicio: Date,
  data_limite: Date,
  concluida: boolean,
  usuario_id: number,
}

@Component({
  selector: 'app-cadastrar-task',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './cadastrar-task.component.html',
  styleUrl: './cadastrar-task.component.css'
})

export class CadastrarTaskComponent {

  form: FormGroup;
  task: Task = {
    descricao: "",
    data_inicio: new Date(),
    data_limite: new Date(),
    concluida: false,
    usuario_id: 0
  }


  constructor(
    private cadastroService: CadastrarTaskService,
    private sharedService: SharedService,
    private readonly router: Router,
    private fb: FormBuilder) {
      this.form = this.fb.group({
        descricao: ['', [Validators.required]],
        data_inicio: ['', [Validators.required]],
        data_limite: ['', [Validators.required]],
        concluida: ['', [Validators.required]],
      });
    }

  onSubmit() {
    this.task = {
      descricao: this.form.value.descricao,
      data_inicio: this.form.value.data_inicio,
      data_limite: this.form.value.data_limite,
      concluida: false,
      usuario_id: this.sharedService.getUsuario()
    }

    this.cadastroService.saveCadastroTask(this.task).subscribe()
    this.router.navigate(['/task']);
  }
}
