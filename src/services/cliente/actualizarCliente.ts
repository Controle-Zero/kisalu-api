import Cliente from "../../models/cliente.models";
import { log } from "../../libs/log";
import db from "../../libs/configs/db";
import { encryptData } from "../../libs/utils/encryption";

export async function actualizarClienteService(id: string, cliente: Cliente) {
  try {
    const clienteExiste = await db.cliente.findMany({
      where: {
        id,
      },
    });

    if (clienteExiste) {
      await db.cliente.update({
        where: {
          id,
        },
        data: {
          bi: cliente.bi,
          dataNasc: new Date(cliente.dataNasc),
          email: cliente.email,
          morada: {
            update: {
              bairro: cliente.morada.bairro,
              complemento: cliente.morada.complemento,
              distrito: cliente.morada.distrito,
              municipio: cliente.morada.municipio,
              provincia: cliente.morada.provincia,
            },
          },
          telefone: cliente.telefone,
          password: encryptData(cliente.password),
          nome: cliente.nome,
        },
      });

      log.info("Os dados foram atualizados");
      return { message: "Customer data have been updated", success: true };
    } else {
      log.info("Cliente não existe");
      return { message: "Customer doesn't exist", success: false };
    }
  } catch (e) {
    log.error(`Erro ao atualizar os dados do cliente- ${e}`);
    return undefined;
  }
}
