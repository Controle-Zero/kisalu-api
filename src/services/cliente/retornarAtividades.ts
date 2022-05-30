import db from "../../libs/configs/db";
import { log } from "../../libs/log";

export default async function retornarAtividadesService(clienteId: string) {
  try {
    const atividades = await db.atividade.findMany({
      where: {
        clienteId,
      },
      select: {
        Prestador: {
          select: {
            bi: true,
            nome: true,
            rate: true,
            email: true,
            telefone: true,
            iban: true,
            id: true,
            imageUrl: true
          },
        },
        Categoria: {
          select: {
            titulo: true,
            id: true,
          },
        },
        dataCriado: true,
        dataFinalizado: true,
        descricao: true,
        estado: true,
        id: true,
        numRef: true,
        valorAssociado: true,
        localizacao: true,
      },
    });

    return atividades;
  } catch (error) {
    log.error(`Erro ao retornar as atividades do cliente- ${error}`);
    return undefined;
  }
}
