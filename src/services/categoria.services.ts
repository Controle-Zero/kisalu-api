import db from "../database/uservices.database";
import { log } from "../log";

export async function retornarCategoriasService() {
  try {
    return await db.categoria.findMany({
      include: {
        prestador: true,
      },
    });
  } catch (e) {
    log.info(`Erro ao retornar as categorias- ${e}`);
    return undefined;
  }
}
