import db from "../database/uservices.database";
import { log } from "../log";
import Atividade from "../models/atividade.models";

export async function criarAtividadeService(atividade: Atividade) {
  try {
    log.info(
      `Criando atividade entre ${atividade.idCliente} e ${atividade.idPrestador}`
    );
    await db.atividade.create({
      data: {
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

export async function actualizarAtividadeService(atividade: Atividade) {
  try {
    const atividadeExiste = await db.atividade.findUnique({
      where: {
        id: atividade.idAtividade,
      },
    });

    if (atividadeExiste) {
      await db.atividade.update({
        where: {
          id: atividade.idAtividade,
        },
        data: {
          dataFinalizado: atividade.dataFinalizado,
          estado: atividade.estado,
          numRef: atividade.numRef,
          valorAssociado: atividade.valorAssociado,
        },
      });
      log.info(`Os dados da atividade ${atividadeExiste.id} foram atualizados`);
      return { mensagem: "Os dados foram atualizados", sucesso: true };
    } else {
      log.info(`A atividade de id ${atividade.idAtividade} não existe`);
      return undefined;
    }
  } catch (e) {
    log.error(`Erro ao atualizar os dados da atividade- ${e}`);
    return undefined;
  }
}
