import Cliente from "../../models/cliente.models";
import { log } from "../../libs/log";
import db from "../../libs/configs/db";
import { encryptData } from "../../libs/utils/encryption";


export async function criarClienteService(cliente: Cliente) {
  try {
    const clienteExiste = await db.cliente.findFirst({
      where: {
        email: cliente.email,
      },
    });

    if (clienteExiste) {
      log.info(`Email já existe no sistema ${cliente.email}`);
      return { message: "The entered email is being used", success: false };
    } else {
      await db.cliente.create({
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

      log.info(`Cliente ${cliente.nome} criado com sucesso!!`);
      return { message: "Customer has been created!", success: true };
    }
  } catch (e) {
    log.error(`${e}- Falha ao criar o cliente: ${cliente.nome}`);
    return undefined;
  }
}
