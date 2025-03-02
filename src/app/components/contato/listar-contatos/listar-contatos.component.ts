import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContatoService } from 'src/app/services/contato.service';
import { Contato } from 'src/app/models/contato.model';

@Component({
    selector: 'app-listar-contatos',
    templateUrl: './listar-contatos.component.html',
    styleUrls: ['./listar-contatos.component.scss']
})
export class ListarContatosComponent implements OnInit {
    contatos: Contato[] = [];
    pessoaId!: number;
    constructor(
        private readonly route: ActivatedRoute,
        private readonly router: Router,
        private readonly contatoService: ContatoService
    ) { }

    ngOnInit(): void {
        const pessoaIdParam = this.route.snapshot.paramMap.get('id');
        if (pessoaIdParam) {
            this.pessoaId = Number(pessoaIdParam);
            this.buscarContatos(this.pessoaId);
        } else {
            console.error('ID da pessoa não encontrado na rota.');
        }
    }

    buscarContatos(pessoaId: number): void {
        this.contatoService.buscarContatosPorPessoaId(pessoaId).subscribe({
            next: (contatos) => {
                console.log('Contatos carregados:', contatos);
                this.contatos = contatos;
            },
            error: (error) => {
                console.error('Erro ao carregar contatos:', error);
                this.contatos = [];
            }
        });
    }

    carregarContatos(): void {
        this.contatoService.buscarContatosPorPessoaId(this.pessoaId).subscribe({
            next: (data) => {
                this.contatos = data;
            },
            error: (error) => {
                console.error('Erro ao buscar contatos:', error);
                alert('Erro ao carregar contatos.');
            }
        });
    }

    editarContato(id: number): void {
        this.router.navigate(['/editar-contato', id]);
    }

    adicionarContato(): void {
        this.router.navigate([`/cadastrar-contato`]);
    }

    voltarParaListaPessoas(): void {
        this.router.navigate(['/listar-pessoas']);
    }

    excluirContato(contatoId: number): void {
        if (confirm('Tem certeza que deseja excluir este contato?')) {
            this.contatoService.excluirContato(contatoId).subscribe({
                next: () => {
                    alert('Contato excluído com sucesso!');
                    this.carregarContatos();
                },
                error: (error) => {
                    console.error('Erro ao excluir contato:', error);
                    alert('Erro ao excluir contato.');
                }
            });
        }
    }
}
