// arquivo de configura��o de rotas
import { Routes } from '@angular/router';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { HomeComponent } from './navegacao/home/home.component';
import { ListarProdutoComponent } from './produtos/listar-produto/listar-produto.component';

export const rootRouterConfig: Routes = [
// caso n�o encontre a rota redireciona para a home
    {path: '', redirectTo:'/home', pathMatch: 'full'},
    {path: 'home',component:HomeComponent},
    {path: 'contato',component: ContatoComponent},
    { path: 'sobre', component: SobreComponent },
    { path: 'feature-data-binding', component: DataBindingComponent },
    { path: 'produtos', component: ListarProdutoComponent },
    { path: 'produto-detalhe/:id', component: ListarProdutoComponent },
];


