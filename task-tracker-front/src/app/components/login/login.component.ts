import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/login.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  validador = 0;
  listaUsuarios: Usuario[] = []; // Declare como um array de Usuario

  constructor(
    private usuarioService: UsuarioService,
    private readonly router: Router,
    private fb: FormBuilder
  ) {
    this.carregarUsuarios();
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
    });
  }

  onSubmit() {
    
      for(let i =0; i < this.listaUsuarios.length; i++){
        if(this.loginForm.get('email')?.value == this.listaUsuarios[i].email && this.loginForm.get('senha')?.value == this.listaUsuarios[i].senha){
          this.acessarTarefa(); // Navega para a próxima tela
            console.log("certo")
        } else {
          this.validador = 1;
        }
      }
  }

  carregarUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe(
      (usuarios: Usuario[]) => {
        this.listaUsuarios = usuarios; // Armazene os usuários na lista
      },
      (error) => {
        console.error('Erro ao carregar usuários:', error); // Tratamento de erro
      }
    );
  }

  acessarTarefa() {
    this.router.navigate(['/task']);
  }
}
