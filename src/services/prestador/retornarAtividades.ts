import db from "../../libs/configs/db";
import { log } from "../../libs/log";

export default async function retornarAtividadesService(prestadorId: string) {
  try {
    const atividades = await db.atividade.findMany({
      where: {
        prestadorId,
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
            imageUrl: true
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
        localizacao: true,
      },
    });

    return atividades;
  } catch (error) {
    log.error(`Erro ao retornar as atividades do prestador- ${error}`);
    return undefined;
  }
}
