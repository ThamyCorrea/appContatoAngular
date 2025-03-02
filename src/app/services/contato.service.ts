import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contato } from '../models/contato.model';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private readonly apiUrl = 'http://localhost:8080/api/contato';

  constructor(private readonly http: HttpClient) {}

  criarContato(contatos: Contato[]): Observable<Contato[]> {
    return this.http.post<Contato[]>(this.apiUrl, contatos);
  }

  buscarContatosPorPessoaId(pessoaId: number): Observable<Contato[]> {
    return this.http.get<Contato[]>(`${this.apiUrl}/pessoa/${pessoaId}`);
  }

  buscarContatoPorId(id: number): Observable<Contato> {
    return this.http.get<Contato>(`${this.apiUrl}/${id}`);
  }

  atualizarContato(id: number, contato: Contato): Observable<Contato> {
    return this.http.put<Contato>(`${this.apiUrl}/${id}`, contato);
  }

  excluirContato(contatoId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${contatoId}`);
  }
}
