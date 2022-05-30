import { Estados } from "@prisma/client";
export default interface Atividade {
  id: string;
  dataCriado: Date;
  dataFinalizado: Date;
  valorAssociado: number;
  numRef: number;
  estado: Estados;
  prestadorId: string;
  clienteId: string;
  categoriaId: string;
  descricao?: string;
  avaliacao?: number;
  feedback?: string;
  localizacao?: string;
}
