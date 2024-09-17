import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TaskComponent } from './components/task/task.component';
import { HabitoComponent } from './components/habito/habito.component';
import { CadastrarTaskComponent } from './components/cadastrar-task/cadastrar-task.component';
import { CadastrarHabitoComponent } from './components/cadastrar-habito/cadastrar-habito.component';

// Definição das rotas
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // outras rotas podem ser adicionadas aqui
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // redireciona a rota padrão para login

  { path: 'task', component: TaskComponent },
  { path: 'habito', component: HabitoComponent },
  { path: 'cadastrar-task', component: CadastrarTaskComponent },
  { path: 'cadastrar-habito', component: CadastrarHabitoComponent },
];

