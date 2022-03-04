import db from "../../libs/configs/db";
import { log } from "../../libs/log";
import { prestadorRateUpdate } from "./actualizarPrestador";
import { getAtividadesCompletas } from "./atividadesHandler";

export async function retornarPrestadorService(idPrestador: string) {
  try {
    const atividades = await getAtividadesCompletas(idPrestador);

    if (atividades) {
      await prestadorRateUpdate(idPrestador, atividades);
    }

    const prestador = await db.prestador.findUnique({
      where: {
        id: idPrestador,
      },
      select: {
        nome: true,
        bi: true,
        categorias: {
          select: {
            idCategoria: true,
          },
        },
        dataNasc: true,
        descricao: true,
        email: true,
        estado: true,
        iban: true,
        id: true,
        morada: true,
        rate: true,
        telefone: true,
        atividades: {
          where: {
            estado: {
              in: ["PENDENTE", "ATIVA", "FINALIZADA"],
            },
          },
          select: {
            Cliente: {
              select: {
                bi: true,
                nome: true,
                morada: true,
                dataNasc: true,
                email: true,
                id: true,
                telefone: true,
              },
            },
            Categoria: {
              select: {
                id: true,
                titulo: true,
              },
            },
            dataCriado: true,
            numRef: true,
            descricao: true,
            id: true,
            estado: true,
            valorAssociado: true,
            dataFinalizado: true,
          },
        },
      },
    });
    log.info(`prestador retorando: ${prestador?.email}`);
    return prestador;
  } catch (e) {
    log.error(`${e}- Falha ao retornar o prestador`);
    return undefined;
  }
}
