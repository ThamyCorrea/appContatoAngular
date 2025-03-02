import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContatoService } from 'src/app/services/contato.service';
import { Contato } from 'src/app/models/contato.model';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Pessoa } from 'src/app/models/pessoa.model';

@Component({
    selector: 'app-editar-contatos',
    templateUrl: './editar-contato.component.html',
    styleUrls: ['./editar-contato.component.scss']
})
export class EditarContatoComponent implements OnInit {
    contatos: Contato[] = [];
    pessoaId: number = 0;
    contatoForm: FormGroup;
    id: number = 0;
    pessoas: Pessoa[] = [];

  constructor(
      private readonly route: ActivatedRoute,
      private readonly router: Router,
      private readonly contatoService: ContatoService,
      private readonly pessoaService: PessoaService,
      private readonly fb: FormBuilder
  ) {
      this.contatoForm = this.fb.group({
          tipoContato: ['', Validators.required],
          contato: ['', [Validators.required]],
          pessoa: this.fb.group({
            id: ['', Validators.required]
          })
      });
  }

  ngOnInit(): void {
    const contatoIdParam = this.route.snapshot.paramMap.get('id');

    if (contatoIdParam) {
        this.id = Number(contatoIdParam);
        this.carregarContato(this.id);
    }

    this.pessoaService.listarPessoas().subscribe({
      next: (pessoas) => {
        this.pessoas = pessoas;
      },
      error: (error) => {
        console.error('Erro ao carregar pessoas:', error);
      }
    });
  }

  carregarContato(id: number): void {
    this.contatoService.buscarContatoPorId(id).subscribe(contato => {
        this.contatoForm.patchValue({
            tipoContato: contato.tipoContato,
            contato: contato.contato,
            pessoa: { id: contato.pessoa.id }
        });
        this.pessoaId = contato.pessoa.id;
    });
  }

    onSubmit(): void {
      if (this.contatoForm.valid) {
        const contatoAtualizado: Contato = {
            ...this.contatoForm.value,
            pessoa: { id: this.pessoaId }
        };
        this.contatoService.atualizarContato(this.id, contatoAtualizado).subscribe(() => {
            alert('Contato atualizado com sucesso!');
            this.router.navigate(['/contato/pessoa/', this.pessoaId]);
        });
      }
    }
}
