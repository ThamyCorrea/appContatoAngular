import { Component, OnInit, Input } from '@angular/core';
import { PessoaService } from '../../../services/pessoa.service';
import { Pessoa } from '../../../models/pessoa.model';

@Component({
  selector: 'app-exibir-contatos',
  templateUrl: './exibir-contatos.component.html',
  styleUrls: ['./exibir-contatos.component.scss']
})
export class ExibirContatosComponent implements OnInit {
  @Input() pessoaId!: number;
    pessoa: Pessoa | undefined;
    contatos: any[] = [];

  constructor(private readonly pessoaService: PessoaService) { }

  ngOnInit(): void {
    if (this.pessoaId) {
      this.carregarPessoa();
    }
  }

  carregarPessoa(): void {
    this.pessoaService.obterPessoaPorId(this.pessoaId).subscribe({
        next: (pessoa: Pessoa) => {
            this.pessoa = pessoa;
            this.contatos = pessoa.contatos || [];
            console.log('Contatos no componente:', this.contatos);
        },
        error: (error) => {
            console.error('Erro ao carregar pessoa:', error);
        },
        complete: () => {
            console.log('Requisição concluída.');
        }
    });
  }
}
