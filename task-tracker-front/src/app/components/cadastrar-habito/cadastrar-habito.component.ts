import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HabitoService } from '../../services/habito.service';
import { SharedService } from '../../services/shared.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


interface Habitos {
  descricao: string;
  usuario_id: number;
}

@Component({
  selector: 'app-cadastrar-habito',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './cadastrar-habito.component.html',
  styleUrl: './cadastrar-habito.component.css'
})
export class CadastrarHabitoComponent {
  habitoForm: FormGroup;

  constructor(
    private router: Router,
    private habitoService: HabitoService,
    private sharedService: SharedService,
    private fb: FormBuilder
  ) {
    this.habitoForm = this.fb.group({
      descricao: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    const habito = {
      descricao: this.habitoForm.value.descricao,
      usuario_id: this.sharedService.getUsuario()
    }
    this.habitoService.saveHabitos(habito).subscribe();
    this.router.navigate(['/habito']);
  }
}
