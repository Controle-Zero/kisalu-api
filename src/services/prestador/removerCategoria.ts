import db from "../../libs/configs/db";
import { log } from "../../libs/log";

export async function removerCategoria(
  idPrestador: string,
  idCategoria: string
) {
  try {
    await db.prestadorCategoria.delete({
      where: {
        idPrestador_idCategoria: {
          idPrestador,
          idCategoria,
        },
      },
    });
    log.info(
      `A categoria foi removida com sucesso do perfil do provedor ${idPrestador}`
    );
    return {
      message: "Category have been removed",
      success: true,
    };
  } catch (e) {
    log.error(
      `Erro ao remover a categoria do perfil do provedor ${idPrestador}- ${e}`
    );
    return undefined;
  }
}
