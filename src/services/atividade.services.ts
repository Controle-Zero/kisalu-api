import db from "../database/uservices.database";
import { log } from "../log";
import Atividade from "../models/atividade.models";

export async function atividadeService(atividade: Atividade) {
  try {
    log.info(
      `Trabalhando na atividade entre ${atividade.idCliente} e ${atividade.idPrestador}`
    );
    await db.atividade.upsert({
      where: {
        id: atividade.idAtividade ?? "",
      },
      update: {
        dataFinalizado: atividade.dataFinalizado,
        estado: atividade.estado,
        numRef: atividade.numRef,
        valorAssociado: atividade.valorAssociado,
      },
      create: {
        clienteId: atividade.idCliente,
        prestadorId: atividade.idPrestador,
        categoriaId: atividade.idCategoria,
      },
    });
    return { mensagem: "Atividade criada com sucesso", sucesso: true };
  } catch (e) {
    log.error(`Erro ao criar nova atividade- ${e}`);
    return undefined;
  }
}
