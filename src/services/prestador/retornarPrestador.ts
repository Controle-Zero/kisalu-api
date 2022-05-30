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
            categoria: {
              select: {
                titulo: true,
                imageUrl: true,
                id: true,
              },
            },
          },
        },
        morada: {
          select: {
            bairro: true,
            complemento: true,
            distrito: true,
            municipio: true,
            provincia: true,
          },
        },
        dataNasc: true,
        descricao: true,
        email: true,
        estado: true,
        iban: true,
        id: true,
        rate: true,
        telefone: true,
        imageUrl: true,
        verificado: true,
        criadoEm: true,
      },
    });
    log.info(`prestador retorando: ${prestador?.email}`);
    return prestador;
  } catch (e) {
    log.error(`${e}- Falha ao retornar o prestador`);
    return undefined;
  }
}
