// src/app/services/contato.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contato } from '../models/contato.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
    private readonly apiUrl = 'http://localhost:8080/api/contato'; 

    constructor(private readonly http: HttpClient) { }

    getContatosPorPessoaId(pessoaId: number): Observable<Contato[]> {
        return this.http.get<Contato[]>(`${this.apiUrl}/pessoa/${pessoaId}`).pipe( // Atualize a URL
            tap(contatos => console.log('Contatos recebidos:', contatos))
        );
    }
}