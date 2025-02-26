import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from 'src/app/models/pessoa.model';

@Component({
  selector: 'app-listar-pessoas',
  templateUrl: './listar-pessoas.component.html',
  styleUrls: ['./listar-pessoas.component.scss']
})
export class ListarPessoasComponent implements OnInit {
  pessoas: any[] = [];

  constructor(private readonly pessoaService: PessoaService, private readonly router: Router) {}

  ngOnInit(): void {
    this.carregarPessoas();
  }

  carregarPessoas() {
    this.pessoaService.getPessoas().subscribe({
      next: (data: Pessoa[]) => {
        this.pessoas = data;
      },
      error: (error) => {
        console.error('Erro ao buscar pessoas:', error);
      },
      complete: () => {
        console.log('Requisição concluída com sucesso!');
      }
    });
  }

  editarPessoa(id: number): void{
    this.router.navigate(['/editar-pessoa', id]);
  }

  excluirPessoa(id: number): void {
    if (confirm('Tem certeza que deseja excluir esta pessoa?')) {
      this.pessoaService.deletePessoa(id).subscribe(() => {
        alert('Pessoa excluída com sucesso!');
        this.carregarPessoas();
      });
    }
  }
}

