import db from "../../libs/configs/db";
import { log } from "../../libs/log";
import Atividade from "../../models/atividade.models";

export async function criarAtividadeService(
  atividade: Pick<
    Atividade,
    "clienteId" | "categoriaId" | "prestadorId" | "descricao"
  >
) {
  try {
    const dbResponse = await db.atividade.create({
      data: {
        Cliente: {
          connect: {
            id: atividade.clienteId,
          },
        },
        Prestador: {
          connect: {
            id: atividade.prestadorId,
          },
        },
        Categoria: {
          connect: {
            id: atividade.categoriaId,
          },
        },
        descricao: atividade.descricao,
      },
    });
    return dbResponse;
  } catch (e) {
    log.error(`Erro ao criar a atividade- ${e}`);
    return undefined;
  }
}
