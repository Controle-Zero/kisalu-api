import Categoria from "../../../models/categoria.models";
import Cliente from "../../../models/cliente.models";
import Prestador from "../../../models/prestador.models";

export default interface AtividadeResponsePayload {
  id: string;
  dataCriado: Date;
  dataFinalizado: Date;
  valorAssociado: number;
  numRef: number;
  estado: string;
  Categoria: Omit<Categoria, "imageUrl">;
  Cliente: Omit<Cliente, "password" | "token" | "atividades">;
  Prestador: Omit<Prestador, "password" | "token" | "atividades">;
}
