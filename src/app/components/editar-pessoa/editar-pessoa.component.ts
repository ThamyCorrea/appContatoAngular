import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from 'src/app/models/pessoa.model';
import { PessoaService } from 'src/app/services/pessoa.service';

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
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    this.id = 0;
    this.pessoaForm = this.fb.group({
      nome: ['', Validators.required],
      cep: ['', [Validators.required, Validators.pattern(/^\d{5}-\d{3}$/)]],
      endereco: ['', Validators.required],
      cidade: ['', Validators.required],
      uf: ['', Validators.required]
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

  onSubmit() {

    if (this.pessoaForm.valid) {
        const pessoaEditada: Pessoa = { ...this.pessoaForm.value, id: this.id };

        this.pessoaService.editarPessoa(pessoaEditada).subscribe({
            next: (response) => {
                console.log('Resposta da API:', response);
                alert('Pessoa editada com sucesso!');
                this.router.navigate(['/listar-pessoas']);
            },
            error: (error) => {
                console.error('Erro ao editar pessoa:', error);
                alert('Erro ao editar pessoa. Tente novamente.');
            },
            complete: () => {
                console.log('Edição concluída com sucesso.');
            }
        });
    } else {
        console.warn('Formulário inválido! Verifique os campos.');
        console.log('Estado do formulário:', this.pessoaForm.valid);
        console.log('Valores do formulário:', this.pessoaForm.value);

        
        Object.keys(this.pessoaForm.controls).forEach((campo) => {
            const controle = this.pessoaForm.get(campo);
            console.log(`Campo: ${campo}, Valor: ${controle?.value}, Valido: ${controle?.valid}, Erros: ${JSON.stringify(controle?.errors)}`);
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
