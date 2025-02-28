import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pessoa } from 'src/app/models/pessoa.model';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-pessoa',
  templateUrl: './cadastrar-pessoa.component.html',
  styleUrls: ['./cadastrar-pessoa.component.scss']
})
export class CadastrarPessoaComponent {
  pessoaForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly pessoaService: PessoaService,
    private readonly router: Router
  ) {
    this.pessoaForm = this.fb.group({
      nome: ['', Validators.required],
      cep: ['', [Validators.required, Validators.pattern(/^\d{5}-\d{3}$/)]],
      endereco: ['', Validators.required],
      cidade: ['', Validators.required],
      uf: ['', Validators.required],
      contatos: this.fb.array([]) 
    });
  }
  
  onSubmit() {
    if (this.pessoaForm.valid) {
      const novaPessoa: Pessoa = this.pessoaForm.value;
      this.pessoaService.cadastrarPessoa(novaPessoa).subscribe({
        next: (response) => {
          console.log('Pessoa cadastrada:', response);
          alert('Cadastro realizado com sucesso!');
          this.router.navigate(['/listar-pessoas']);
        },
        error: (err) => {
          console.error('Erro ao cadastrar:', err);
        },
        complete: () => {
          console.log('Requisição finalizada.');
        }
      });
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
            uf: data.uf,
          });
        }
      });
    }
  }
}