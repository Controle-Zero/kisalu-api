import db from "../../database/uservices.database";
import { log } from "../../libs/log";




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
