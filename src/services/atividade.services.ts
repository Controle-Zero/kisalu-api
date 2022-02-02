import db from "../database/uservices.database";
import { log } from "../libs/log";
import atividadeTemplate, {
  AtividadeTemplateContext,
} from "../libs/document_generator/renders/atividade.renders";
import Atividade from "../models/atividade.models";
import Categoria from "../models/categoria.model";
import Cliente from "../models/cliente.models";
import Prestador from "../models/prestador.models";

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
    const atividade: Atividade = await db.atividade.findUnique({
      where: {
        id: idAtividade,
      },
    });

    if (atividade) {
      const cliente: Cliente = await db.cliente.findUnique({
        where: { id: atividade.clienteId },
      });
      const provedor: Prestador = await db.prestador.findUnique({
        where: { id: atividade.prestadorId },
      });
      const categoria: Categoria = await db.categoria.findUnique({
        where: {
          id: atividade.categoriaId,
        },
      });
      return atividadeTemplate({
        atividade,
        cliente,
        provedor,
        categoria,
      } as AtividadeTemplateContext);
    }
  } catch (e) {
    log.error(`${e}- Erro ao procurar a atividade...`);
    return undefined;
  }
}
