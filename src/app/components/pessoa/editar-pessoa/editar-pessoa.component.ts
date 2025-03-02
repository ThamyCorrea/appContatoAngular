import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from 'src/app/models/pessoa.model';
import { PessoaService } from 'src/app/services/pessoa.service';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.scss']
})
export class EditarPessoaComponent implements OnInit {
  pessoaForm: FormGroup;
  id: number;

  constructor(
    private readonly fb: FormBuilder,
    private readonly pessoaService: PessoaService,
    private readonly contatoService: ContatoService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    this.id = 0;
    this.pessoaForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      cep: ['', [Validators.required, Validators.pattern(/^\d{5}-\d{3}$/)]],
      endereco: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]],
      cidade: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      uf: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]]
    });
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.carregarPessoa();
  }

  carregarPessoa() {
    this.pessoaService.obterPessoaPorId(this.id).subscribe(data => {
      this.pessoaForm.patchValue(data);
    });
  }

  onSubmit(): void {
    if (this.pessoaForm.valid) {
      const pessoaEditada: Pessoa = { ...this.pessoaForm.value, id: this.id };

      this.pessoaService.editarPessoa(pessoaEditada).subscribe({
        next: () => {
          alert('Pessoa editada com sucesso!');
          this.router.navigate([`/contato/pessoa`, this.id]);
        },
        error: (error) => {
          console.error('Erro ao editar pessoa:', error);
          alert('Erro ao editar pessoa. Tente novamente.');
        }
      });
    } else {
      console.warn('Formulário inválido! Verifique os campos.');
    }
  }

  buscarEnderecoPorCep() {
    const cep = this.pessoaForm.get('cep')?.value;
    if (cep) {
      this.pessoaService.buscarEnderecoPorCep(cep).subscribe(data => {
        if (data) {
          this.pessoaForm.patchValue({
            endereco: data.logradouro,
            cidade: data.localidade,
            uf: data.uf
          });
        }
      });
    }
  }
}
