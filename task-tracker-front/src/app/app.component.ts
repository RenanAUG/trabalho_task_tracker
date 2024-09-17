import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'task-tracker-front';

  constructor(
    private readonly router: Router
  ) {}

  acessarTask() {
    this.router.navigate(['/task']);
  }

  acessarHabitos() {
    this.router.navigate(['/habito']);
  }

  sair() {
    this.router.navigate(['/login']);
  }
}
