import db from "../database/uservices.database";
import { log } from "../libs/log";
import { generateAtividadePDF } from "../libs/pdf_generator";
import { AtividadeTemplateContext } from "../libs/pdf_generator/renders/atividade.renders";
import Atividade from "../models/atividade.models";
import Categoria from "../models/categoria.model";
import Cliente from "../models/cliente.models";
import Prestador from "../models/prestador.models";
import { retornarCategoriaService } from "./categoria.services";
import { retornarClienteService } from "./cliente.services";
import { retornarPrestadorService } from "./prestador.services";

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
      return await generateAtividadePDF({
        atividade,
        cliente,
        provedor,
        categoria,
      });
    }
  } catch (e) {
    log.error(`${e}- Erro ao procurar a atividade...`);
    return undefined;
  }
}
