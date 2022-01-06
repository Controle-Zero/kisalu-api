import db from "../database/uservices.database";
import Categoria from "../models/categoria.model";
import { log } from "../log";

export async function criarCategoriaService(categoria: Categoria) {
  try {
    await db.categoria.create({
      data: {
        titulo: categoria.titulo,
        imageUrl: categoria.imageUrl,
      },
    });
    return true;
  } catch (e) {
    log.error(`${e}- Erro ao inserir categoria`);
    return false;
  }
}

export async function retornarCategoriasService() {
  try {
    return await db.categoria.findMany({
      include: {
        prestadores: {
          select: {
            prestador: true,
          },
        },
      },
    });
  } catch (e) {
    log.error(`Erro ao retornar as categorias- ${e}`);
    return undefined;
  }
}
