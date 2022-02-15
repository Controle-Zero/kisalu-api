import db from "../../database/uservices.database";
import { log } from "../../libs/log";

export async function updateAtividadeService(atividade) {
  try {
    return await db.atividade.update({
      where: {
        id: atividade.id,
      },
      data: {
        dataFinalizado: atividade.dataFinalizado,
        estado: atividade.estado,
        numRef: atividade.numRef,
        valorAssociado: atividade.valorAssociado,
      },
    });
  } catch (e) {
    log.error(`Erro ao actualizar a atividade- ${e}`);
    return undefined;
  }
}
