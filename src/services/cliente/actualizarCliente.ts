import Cliente from "../../models/cliente.models";
import { log } from "../../libs/log";
import db from "../../configs/db";
import { encryptData } from "../../libs/encryption";

export async function actualizarClienteService(cliente: Cliente) {
  try {
    const clienteExiste = await db.cliente.findMany({
      where: {
        email: cliente.email,
      },
    });

    if (clienteExiste) {
      await db.cliente.update({
        where: {
          email: cliente.email,
        },
        data: {
          bi: cliente.bi,
          dataNasc: new Date(cliente.dataNasc),
          email: cliente.email,
          morada: cliente.morada,
          telefone: cliente.telefone,
          password: encryptData(cliente.password),
          nome: cliente.nome,
        },
      });

      log.info("Os dados foram atualizados");
      return { mensagem: "Os dados foram atualizados", sucesso: true };
    } else {
      log.info("Cliente não existe");
      return { mensagem: "O cliente não existe" };
    }
  } catch (e) {
    log.error(`Erro ao atualizar os dados do cliente- ${e}`);
    return undefined;
  }
}
