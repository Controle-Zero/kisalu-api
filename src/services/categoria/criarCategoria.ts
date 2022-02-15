import db from "../../configs/db";
import Categoria from "../../models/categoria.model";
import { log } from "../../libs/log";


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
