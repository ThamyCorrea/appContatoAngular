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

@NgModule({
  declarations: [
    AppComponent,
    CadastrarPessoaComponent,
    EditarPessoaComponent,
    HeaderComponent,
    ListarPessoasComponent,
    ExibirContatosComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
