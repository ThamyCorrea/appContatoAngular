import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastrar-pessoa',
  templateUrl: './cadastrar-pessoa.component.html',
  styleUrls: ['./cadastrar-pessoa.component.scss']
})
export class CadastrarPessoaComponent {
  pessoaForm: FormGroup;
  pessoaIdCadastrada!: number;

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
      uf: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.pessoaForm.valid) {
      this.pessoaService.cadastrarPessoa(this.pessoaForm.value).subscribe({
        next: (response) => {
          console.log('Pessoa cadastrada com sucesso:', response);

          alert('Pessoa cadastrada com sucesso!');

          this.pessoaIdCadastrada = response.id;

          this.router.navigate(['/cadastrar-contato']);
        },
        error: (err) => {
          console.error('Erro ao cadastrar pessoa:', err);
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
