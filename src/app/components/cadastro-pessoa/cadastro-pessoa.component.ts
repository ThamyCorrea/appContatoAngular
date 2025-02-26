import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pessoa } from 'src/app/models/pessoa.model';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.scss']
})
export class CadastroPessoaComponent {
  pessoaForm: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly pessoaService: PessoaService) {
    this.pessoaForm = this.fb.group({
      nome: ['', Validators.required],
      cep: ['', [Validators.required, Validators.pattern(/^\d{5}-\d{3}$/)]],
      endereco: ['', Validators.required],
      cidade: ['', Validators.required],
      uf: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.pessoaForm.valid) {
      const novaPessoa: Pessoa = this.pessoaForm.value;
      this.pessoaService.cadastrarPessoa(novaPessoa).subscribe({
        next: (response) => {
          console.log('Pessoa cadastrada:', response);          
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
            uf: data.uf
          });
        }
      });
    }
  }
}
