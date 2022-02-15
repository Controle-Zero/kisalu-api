import Categoria from "../../../models/categoria.model";
import Cliente from "../../../models/cliente.models";

export default interface AtividadePayload {
  id: string;
  dataCriado: Date;
  dataFinalizado: Date;
  valorAssociado: number;
  numRef: number;
  estado: string;
  Categoria: Omit<Categoria, "imageUrl">;
  Cliente: Omit<Cliente, "password" | "token" | "atividades">;
}
