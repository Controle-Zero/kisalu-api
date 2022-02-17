import Prestador from "./prestador.models";
export default interface Categoria {
  id: string;
  titulo: string;
  imageUrl: string;
  prestadores?: Prestador[];
}
