import { log } from "../../libs/log";
import db from "../../libs/configs/db";

export async function retornarClienteService(idCliente: string) {
  try {
    const cliente = await db.cliente.findUnique({
      where: {
        id: idCliente,
      },
    });
    log.info(`Cliente retorando: ${cliente?.email}`);
    return cliente;
  } catch (e) {
    log.error(`${e}- Falha ao retornar o cliente`);
    return undefined;
  }
}
