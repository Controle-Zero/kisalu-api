import Cliente from "../models/cliente.models";
import log from "../log";
import db from "../database/uservices.database";
import { encryptData } from "../helpers/encryption.helpers";

export async function criarClienteService(cliente: Cliente) {
  try {
    await db.cliente.create({
      data: {
        bi: cliente.bi,
        dataNasc: new Date(cliente.dataNasc),
        email: cliente.email,
        morada: cliente.morada,
        telefone: +cliente.telefone,
        password: encryptData(cliente.password),
        nome: cliente.nome,
      },
    });
    log.info(`Cliente ${cliente.nome} criado com sucesso!!`);
    return { mensagem: "Cliente criado com sucesso!!" };
  } catch (e) {
    log.error(`${e}- Falha ao criar o cliente: ${cliente.nome}`);
    return { mensagem: "Falha ao criar o cliente..." };
  }
}

export async function actualizarClienteService(
  idClient: number,
  cliente: Cliente
) {}

export async function retornarClienteService(emailCliente: string) {
  try {
    const cliente = await db.cliente.findUnique({
      where: {
        email: emailCliente,
      },
    });
    log.info(`Cliente retorando: ${cliente?.email}`);
    return cliente;
  } catch (e) {
    log.error(`${e}- Falha ao retornar o cliente`);
    return undefined;
  }
}

export async function apagarClienteService(idCliente: number) {}
