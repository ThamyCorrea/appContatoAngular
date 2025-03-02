import { CadastrarContatoComponent } from './components/contato/cadastrar-contato/cadastrar-contato.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarPessoaComponent } from './components/pessoa/cadastrar-pessoa/cadastrar-pessoa.component';
import { EditarPessoaComponent } from './components/pessoa/editar-pessoa/editar-pessoa.component';
import { ListarPessoasComponent } from './components/pessoa/listar-pessoas/listar-pessoas.component';
import { EditarContatoComponent } from './components/contato/editar-contato/editar-contato.component';
import { ListarContatosComponent } from './components/contato/listar-contatos/listar-contatos.component';

const routes: Routes = [
  { path: 'cadastrar-pessoa', component: CadastrarPessoaComponent },
  { path: 'editar-pessoa/:id', component: EditarPessoaComponent },
  { path: 'listar-pessoas', component: ListarPessoasComponent },
  { path: 'cadastrar-contato', component: CadastrarContatoComponent },
  { path: 'editar-contato/:id', component: EditarContatoComponent },
  { path: 'contato/pessoa/:id', component: ListarContatosComponent },
  { path: '', redirectTo: '/listar-pessoas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
