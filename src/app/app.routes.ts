// arquivo de configura��o de rotas
import { Routes } from '@angular/router';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { HomeComponent } from './navegacao/home/home.component';

export const rootRouterConfig: Routes = [
// caso n�o encontre a rota redireciona para a home
    {path: '', redirectTo:'/home', pathMatch: 'full'},
    {path: 'home',component:HomeComponent},
    {path: 'contato',component: ContatoComponent},
    {path: 'sobre',component: SobreComponent},
];


