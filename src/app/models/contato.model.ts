export enum TipoContato {
  TELEFONE = "TELEFONE",
  CELULAR = "CELULAR",
  EMAIL = "EMAIL",
  URL = "URL"
}

export interface Contato {
  id?: number;
  tipoContato: string;
  contato: string;
  pessoa: {
      id: number;
  };
}
