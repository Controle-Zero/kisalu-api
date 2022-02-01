export default interface Atividade {
  id: string;
  dataCriado: Date;
  dataFinalizado: Date;
  valorAssociado: number;
  numRef: number;
  estado: string;
  prestadorId: string;
  clienteId: string;
  categoriaId: string;
}
