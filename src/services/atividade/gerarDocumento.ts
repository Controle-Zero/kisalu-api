import db from "../../libs/configs/db";
import { log } from "../../libs/log";
import atividadeTemplate from "../../libs/document_generator/renders/atividade.renders";
import Atividade from "../../models/atividade.models";
import Categoria from "../../models/categoria.models";

export async function gerarDocumentoService(idAtividade: string) {
  try {
    const atividade: Atividade = await db.atividade.findUnique({
      where: {
        id: idAtividade,
      },
    });

    if (atividade) {
      const cliente = await db.cliente.findUnique({
        where: { id: atividade.clienteId },
      });
      const provedor = await db.prestador.findUnique({
        where: { id: atividade.prestadorId },
      });
      const categoria: Categoria = await db.categoria.findUnique({
        where: {
          id: atividade.categoriaId,
        },
      });
      return atividadeTemplate(atividade, cliente, provedor, categoria);
    }
  } catch (e) {
    log.error(`${e}- Erro ao gerar o documento`);
    return undefined;
  }
}
