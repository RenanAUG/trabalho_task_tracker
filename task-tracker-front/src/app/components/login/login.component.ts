import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private readonly router: Router
  ) {

  }

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Adicione aqui a lógica para autenticação, como chamar um serviço de autenticação
  }

  acessarTarefa() {
    this.router.navigate(['/task']);
  }
}
