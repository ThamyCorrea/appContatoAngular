import { EditarPessoaComponent } from './components/pessoa/editar-pessoa/editar-pessoa.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarPessoaComponent } from './components/pessoa/cadastrar-pessoa/cadastrar-pessoa.component';
import { ListarPessoasComponent } from './components/pessoa/listar-pessoas/listar-pessoas.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ExibirContatosComponent } from './components/contato/exibir-contatos/exibir-contatos.component';
import { CadastrarContatoComponent } from './components/contato/cadastrar-contato/cadastrar-contato.component';
import { CommonModule } from '@angular/common';
import { EditarContatoComponent } from './components/contato/editar-contato/editar-contato.component';
import { ListarContatosComponent } from './components/contato/listar-contatos/listar-contatos.component';
@NgModule({
  declarations: [
    AppComponent,
    CadastrarPessoaComponent,
    EditarPessoaComponent,
    HeaderComponent,
    ListarPessoasComponent,
    ExibirContatosComponent,
    CadastrarContatoComponent,
    EditarContatoComponent,
    ListarContatosComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
