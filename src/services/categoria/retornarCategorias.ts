import db from "../../libs/configs/db";
import { log } from "../../libs/log";
import Categoria from "../../models/categoria.models";

export async function retornarCategoriasService() {
  try {
    const categoriasDB = await db.categoria.findMany({
      include: {
        prestadores: {
          select: {
            prestador: true,
          },
        },
      },
    });

    let categorias = [];

    categoriasDB.forEach((e) => {
      categorias.push({
        id: e.id,
        titulo: e.titulo,
        imageUrl: e.imageUrl,
        prestadores: e.prestadores.map((m) => m.prestador),
      });
    });

    return categorias;
  } catch (e) {
    log.error(`Erro ao retornar as categorias- ${e}`);
    return undefined;
  }
}
