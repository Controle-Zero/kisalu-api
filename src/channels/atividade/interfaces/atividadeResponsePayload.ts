import Categoria from "../../../models/categoria.models";
import Cliente from "../../../models/cliente.models";

export default interface AtividadeResponsePayload {
  id: string;
  dataCriado: Date;
  dataFinalizado: Date;
  valorAssociado: number;
  numRef: number;
  estado: string;
  Categoria: Omit<Categoria, "imageUrl">;
  Cliente: Omit<Cliente, "password" | "token" | "atividades">;
}
