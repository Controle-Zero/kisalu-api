import db from "../../configs/db";
import { log } from "../../libs/log";

export async function retornarPrestadorService(idPrestador: string) {
  try {
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
        classificacao: true,
        descricao: true,
        email: true,
        estado: true,
        iban: true,
        id: true,
        morada: true,
        numAvaliacoes: true,
        rate: true,
        telefone: true,
        atividades: {
          where: {
            estado: {
              in: ["PENDENTE", "ATIVA"],
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
