import db from "../database/uservices.database";
import { log } from "../libs/log";
import Atividade from "../models/atividade.models";
import { retornarCategoriaService } from "./categoria.services";
import { retornarClienteService } from "./cliente.services";
import { retornarPrestadorService } from "./prestador.services";

export async function atividadeService(atividade: Atividade) {
  try {
    log.info(
      `Trabalhando na atividade entre ${atividade.idCliente} e ${atividade.idPrestador}`
    );
    const dbResponse = await db.atividade.upsert({
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
    return dbResponse;
  } catch (e) {
    log.error(`Erro ao criar nova atividade- ${e}`);
    return undefined;
  }
}

export async function gerarDocumentoService(idAtividade: string) {
  try {
    const atividade = await db.atividade.findUnique({
      where: {
        id: idAtividade,
      },
    });

    if (atividade) {
      const cliente = retornarClienteService(atividade.clienteId);
      const provedor = retornarPrestadorService(atividade.prestadorId);
      const categoria = retornarCategoriaService(atividade.categoriaId);
    }
  } catch (e) {
    log.error(`${e}- Erro ao procurar a atividade`);
    return undefined;
  }
}
