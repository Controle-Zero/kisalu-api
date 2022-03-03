import Cliente from "./cliente.models";

export default interface Prestador extends Cliente {
  id: string;
  estado: string;
  iban: string;
  rate: number;
  descricao: string;
  idCategorias? : string[];
  categorias?: {
    idCategoria: string;
  }[];
}
