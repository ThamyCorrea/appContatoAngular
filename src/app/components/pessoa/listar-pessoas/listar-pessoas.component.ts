import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaService } from '../../../services/pessoa.service';
import { Pessoa } from 'src/app/models/pessoa.model';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-listar-pessoas',
  templateUrl: './listar-pessoas.component.html',
  styleUrls: ['./listar-pessoas.component.scss']
})
export class ListarPessoasComponent implements OnInit {
  pessoas: Pessoa[] = [];
  pessoaSelecionadaId: number = 0;

  constructor(private readonly pessoaService: PessoaService, private readonly router: Router) {}

  ngOnInit(): void {
    this.carregarPessoas();
  }

  carregarPessoas() {
    this.pessoaService.listarPessoas().subscribe({
        next: (data: Pessoa[]) => {
            this.pessoas = data;
            this.pessoas.forEach(pessoa => pessoa.showContatos = false);
        },
        error: (error) => {
            console.error('Erro ao buscar pessoas:', error);
        },
        complete: () => {
            console.log('Requisição concluída com sucesso!');
        }
    });
}

  editarPessoa(id: number): void {
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

  obterNomeTipoContato(tipo: number): string {
    switch (tipo) {
        case 0: return 'Telefone';
        case 1: return 'Celular';
        case 2: return 'Email';
        case 3: return 'URL';
        default: return 'Desconhecido';
    }
}

  toggleContatos(pessoaId: number): void {
    const pessoa = this.pessoas.find(p => p.id === pessoaId);
    if (pessoa) {
        pessoa.showContatos = !pessoa.showContatos;
    }
}

abrirModalContatos(pessoaId: number): void {
  this.pessoaSelecionadaId = pessoaId;
  const modalElement = document.getElementById('modalContatos');
  if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
  } else {
      console.error('Modal não encontrado!');
  }
}
}
