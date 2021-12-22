import { Atividade, Prestador } from "@prisma/client";

export default interface Categoria {
  categoriaId: string;
  titulo: string;
  imageUrl: string;
  atividades: Atividade[];
  prestadores: Prestador[];
}
