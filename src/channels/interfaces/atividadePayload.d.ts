import Atividade from "../../models/atividade.models";
import Categoria from "../../models/categoria.models";
import Cliente from "../../models/cliente.models";
import Prestador from "../../models/prestador.models";

export interface AtividadeResponsePayload {
  id: string;
  dataCriado: Date;
  dataFinalizado: Date;
  valorAssociado: number;
  numRef: number;
  estado: string;
  descricao: string;
  Categoria: Omit<Categoria, "imageUrl">;
  Cliente: Omit<Cliente, "password" | "token" | "atividades">;
  Prestador: Omit<Prestador, "password" | "token" | "atividades">;
}

export type AtividadeRequestPayload = Pick<
  Atividade,
  "clienteId" | "categoriaId" | "prestadorId" | "descricao"
>;
