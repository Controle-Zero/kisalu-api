import db from "../../database/uservices.database";
import { log } from "../../libs/log";
import Atividade from "../../models/atividade.models";


export async function criarAtividadeService(atividade: Atividade) {
  try {
    log.info(`Atividade service- ${atividade.id}`);
    const dbResponse = await db.atividade.create({
      data: {
        clienteId: atividade.clienteId,
        prestadorId: atividade.prestadorId,
        categoriaId: atividade.categoriaId,
        descricao: atividade.descricao,
      },
    });
    return dbResponse;
  } catch (e) {
    log.error(`Erro ao criar- ${e}`);
    return undefined;
  }
}
