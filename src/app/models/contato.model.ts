export interface Contato {
  id?: number;
  tipoContato: string;
  contato: string;
  pessoa: {
      id: number;
  };
}
