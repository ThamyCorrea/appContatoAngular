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
}
