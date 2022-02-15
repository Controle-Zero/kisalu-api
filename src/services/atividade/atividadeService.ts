import db from "../../database/uservices.database";
import { log } from "../../libs/log";
import Atividade from "../../models/atividade.models";


export async function atividadeService(atividade: Atividade) {
  try {
    log.info(
      `Trabalhando na atividade entre ${atividade.clienteId} e ${atividade.prestadorId}`
    );
    const dbResponse = await db.atividade.upsert({
      where: {
        id: atividade.id ?? "",
      },
      update: {
        dataFinalizado: atividade.dataFinalizado,
        estado: atividade.estado,
        numRef: atividade.numRef,
        valorAssociado: atividade.valorAssociado,
      },
      create: {
        clienteId: atividade.clienteId,
        prestadorId: atividade.prestadorId,
        categoriaId: atividade.categoriaId,
        descricao: atividade.descricao,
      },
    });
    return dbResponse;
  } catch (e) {
    log.error(`Erro ao criar/atualizar nova atividade- ${e}`);
    return undefined;
  }
}
