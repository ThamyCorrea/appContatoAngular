import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContatoService } from 'src/app/services/contato.service';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Pessoa } from 'src/app/models/pessoa.model';

@Component({
  selector: 'app-cadastrar-contato',
  templateUrl: './cadastrar-contato.component.html',
  styleUrls: ['./cadastrar-contato.component.scss']
})
export class CadastrarContatoComponent implements OnInit {
  contatoForm!: FormGroup;
  pessoas: Pessoa[] = [];

  tiposContato = [
    { id: 0, nome: 'Telefone' },
    { id: 1, nome: 'Celular' },
    { id: 2, nome: 'Email' },
    { id: 3, nome: 'URL' }
  ];

  constructor(
    private readonly contatoService: ContatoService,
    private readonly pessoaService: PessoaService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.contatoForm = this.formBuilder.group({
      pessoaId: ['', Validators.required],
      contatos: this.formBuilder.array([])
    });

    this.carregarPessoas();
    this.adicionarContato();
  }

  get contatosArray(): FormArray {
    return this.contatoForm.get('contatos') as FormArray;
  }

  carregarPessoas(): void {
    this.pessoaService.listarPessoas().subscribe({
      next: (pessoas) => {
        this.pessoas = pessoas;
      },
      error: (err) => {
        console.error('Erro ao buscar pessoas:', err);
      }
    });
  }

  adicionarContato(): void {
    const contatoGroup = this.formBuilder.group({
      tipoContato: ['', Validators.required],
      contato: ['', Validators.required]
    });

    this.contatosArray.push(contatoGroup);
  }

  removerContato(index: number): void {
    this.contatosArray.removeAt(index);
  }

  onSubmit(): void {
    if (this.contatoForm.valid) {
      const pessoaId = Number(this.contatoForm.value.pessoaId);

      const contatos = this.contatoForm.value.contatos.map((contato: any) => ({
        tipoContato: contato.tipoContato,
        contato: contato.contato,
        pessoa: { id: pessoaId }
      }));

      console.log('Pessoa ID enviado:', pessoaId);
      console.log('Contatos enviados:', JSON.stringify(contatos));

      this.contatoService.criarContato(contatos).subscribe({
        next: () => {
          alert('Contatos cadastrados com sucesso!');
          this.router.navigate(['/listar-pessoas']);
        },
        error: (err) => {
          console.error('Erro ao cadastrar contatos:', err);
        }
      });
    } else {
      console.log('Formulário inválido:', this.contatoForm.value);
    }
  }
}
