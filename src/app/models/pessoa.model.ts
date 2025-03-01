import { Contato } from './contato.model';

export interface Pessoa {
  id: number;
  nome: string;
  cep: string;
  endereco: string;
  cidade: string;
  uf: string;
  contatos?: Contato[]; 
  showContatos?: boolean;
}