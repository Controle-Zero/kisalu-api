import Prestador from "./prestador.models";
export default interface Categoria {
  categoriaId: string;
  titulo: string;
  imageUrl: string;
  prestadores: Prestador[];
}
