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
          include: {
            categoria: {
              select: {
                titulo: true,
                imageUrl: true,
                id: true,
              },
            },
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
        imageUrl: true,
      },
    });
    log.info(`prestador retorando: ${prestador?.email}`);
    return prestador;
  } catch (e) {
    log.error(`${e}- Falha ao retornar o prestador`);
    return undefined;
  }
}
