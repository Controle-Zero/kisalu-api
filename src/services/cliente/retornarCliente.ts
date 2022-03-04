import { log } from "../../libs/log";
import db from "../../libs/configs/db";

export async function retornarClienteService(idCliente: string) {
  try {
    const cliente = await db.cliente.findUnique({
      where: {
        id: idCliente,
      },
      select: {
        atividades: {
          where: {
            estado: {
              in: ["PENDENTE", "ATIVA", "FINALIZADA"],
            },
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
          },
        },
        nome: true,
        bi: true,
        id: true,
        email: true,
        morada: true,
        dataNasc: true,
        telefone: true,
      },
    });
    log.info(`Cliente retorando: ${cliente?.email}`);
    return cliente;
  } catch (e) {
    log.error(`${e}- Falha ao retornar o cliente`);
    return undefined;
  }
}
