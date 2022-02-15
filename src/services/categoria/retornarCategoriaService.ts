import db from "../../database/uservices.database";
import { log } from "../../libs/log";


export async function retornarCategoriaService(idCategoria: string) {
  try {
    const categoria = await db.categoria.findUnique({
      where: {
        id: idCategoria,
      },
    });
    log.info(`Categoria retornada- ${categoria.titulo}`);
    return categoria;
  } catch (e) {
    log.info(`${e}- Erro ao retornar a categoria`);
    return undefined;
  }
}
