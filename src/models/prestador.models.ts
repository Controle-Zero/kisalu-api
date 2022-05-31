import Categoria from "./categoria.models";
import Cliente from "./cliente.models";

export default interface Prestador extends Cliente {
  id: string;
  estado: string;
  iban: string;
  rate: number;
  descricao: string;
  verificado: boolean;
  portifolio: Post[];
  idCategorias?: string[];
  categorias?: {
    idCategoria: string;
  }[];
}

export interface Post {
  descricao: string;
  mediaUrl: string;
  categoria: Categoria;
}
