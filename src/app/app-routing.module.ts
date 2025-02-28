import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarPessoaComponent } from './components/pessoa/cadastrar-pessoa/cadastrar-pessoa.component';
import { EditarPessoaComponent } from './components/pessoa/editar-pessoa/editar-pessoa.component';
import { ListarPessoasComponent } from './components/pessoa/listar-pessoas/listar-pessoas.component';

const routes: Routes = [
  { path: 'cadastrar-pessoa', component: CadastrarPessoaComponent },
  { path: 'editar-pessoa/:id', component: EditarPessoaComponent },
  { path: 'listar-pessoas', component: ListarPessoasComponent },
  { path: '', redirectTo: '/listar-pessoas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
