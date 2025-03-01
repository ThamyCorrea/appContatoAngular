import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from '../models/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private readonly apiUrl = 'http://localhost:8080/api/pessoas';

  constructor(private readonly http: HttpClient) {}

  cadastrarPessoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.apiUrl, pessoa);
  }

  editarPessoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.put<Pessoa>(`${this.apiUrl}/${pessoa.id}`, pessoa);
  }

  listarPessoas(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.apiUrl);
  }

  obterPessoaPorId(pessoaId: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${this.apiUrl}/${pessoaId}`);
  }

  cadastrarContato(contato: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${contato.pessoaId}/contatos`, contato);
  }

  buscarEnderecoPorCep(cep: string): Observable<any> {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }

  deletePessoa(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
