export interface Pessoa {
  id: number; 
  nome: string;
  cep: string;
  endereco: string;
  cidade: string;
  uf: string;
  contato: Contato[];

  
}

export interface Contato {
  tipoContato: number;
  contato: string;
}
