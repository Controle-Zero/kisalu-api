import db from "../../libs/configs/db";
import Categoria from "../../models/categoria.models";
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
