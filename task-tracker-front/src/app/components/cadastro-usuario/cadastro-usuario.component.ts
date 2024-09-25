import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/login.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CadastroUsuarioService } from '../../services/cadastro-usuario.service';

interface Usuario {
  nome: string;
  email: string;
  senha: string;
}

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.css'
})
export class CadastroUsuarioComponent {

  loginForm: FormGroup;
  usuario: Usuario = {
    nome: "",
    email: "",
    senha: ""
  }
  listaUsuarios: Usuario[] = [];

  constructor(
    private cadastroService: CadastroUsuarioService,
    private readonly router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
      nome: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.usuario = {
      email: this.loginForm.value.email,
      senha: this.loginForm.value.senha,
      nome: this.loginForm.value.nome
    }
    this.cadastroService.saveUsuario(this.usuario).subscribe()
  }


  acessarTarefa() {
    this.router.navigate(['/task']);
  }

}
