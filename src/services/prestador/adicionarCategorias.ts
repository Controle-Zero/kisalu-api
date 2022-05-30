import db from "../../libs/configs/db";
import { log } from "../../libs/log";

export async function adicionarCategoriasService(
  idPrestador: string,
  idCategorias: string[]
) {
  try {
    await db.prestador.update({
      where: {
        id: idPrestador,
      },
      data: {
        categorias: {
          createMany: {
            data: idCategorias.map((ic) => {
              return { idCategoria: ic };
            }),
          },
        },
      },
    });
    log.info(
      `As categorias foram adicionadas com sucesso ao perfil do provedor ${idPrestador}`
    );
    return {
      message: "Categories have been added",
      success: true,
    };
  } catch (e) {
    log.error(
      `Erro ao adicionar categorias no perfil do provedor ${idPrestador}- ${e}`
    );
    return undefined;
  }
}
