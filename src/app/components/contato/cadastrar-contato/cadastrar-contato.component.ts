import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContatoService } from 'src/app/services/contato.service';
import { PessoaService } from 'src/app/services/pessoa.service'; // Novo serviço para listar pessoas
import { Pessoa } from 'src/app/models/pessoa.model'; // Criar modelo se necessário

@Component({
  selector: 'app-cadastrar-contato',
  templateUrl: './cadastrar-contato.component.html',
  styleUrls: ['./cadastrar-contato.component.scss']
})
export class CadastrarContatoComponent implements OnInit {
  contatoForm!: FormGroup;
  pessoas: Pessoa[] = []; // Lista de pessoas cadastradas

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
      pessoaId: ['', Validators.required], // Select de pessoas
      contatos: this.formBuilder.array([])
    });

    this.carregarPessoas(); // Busca as pessoas cadastradas no backend
    this.adicionarContato();
  }

  // 🔥 Getter para acessar o FormArray no HTML
  get contatosArray(): FormArray {
    return this.contatoForm.get('contatos') as FormArray;
  }

  // 🔥 Busca as pessoas no backend
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

  // 🔥 Adiciona um novo contato ao formulário
  adicionarContato(): void {
    const contatoGroup = this.formBuilder.group({
      tipoContato: ['', Validators.required],
      contato: ['', Validators.required]
    });

    this.contatosArray.push(contatoGroup);
  }

  // 🔥 Remove um contato do formulário
  removerContato(index: number): void {
    this.contatosArray.removeAt(index);
  }

  onSubmit(): void {
    if (this.contatoForm.valid) {
      const pessoaId = Number(this.contatoForm.value.pessoaId); // Garante que é um número

      const contatos = this.contatoForm.value.contatos.map((contato: any) => ({
        tipoContato: contato.tipoContato,
        contato: contato.contato,
        pessoa: { id: pessoaId } // Agora o ID está dentro do objeto 'pessoa'
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
  }}
