import Cliente from "../models/cliente.models";
import log from "../log";
import db from "../database/uservices.database";
import {
  compareEncryptedData,
  encryptData,
} from "../helpers/encryption.helpers";
import { gerarRefreshTokenCliente } from "../helpers/generateRefreshToken.helpers";
import { gerarToken } from "../helpers/generateToken.helpers";

export async function criarClienteService(cliente: Cliente) {
  try {
    const clienteExiste = await db.cliente.findFirst({
      where: {
        email: cliente.email,
      },
    });

    if (clienteExiste) {
      log.info(`Email já existe no sistema ${cliente.email}`);
      return { mensagem: "O email já se encontra no sistema" };
    } else {
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
    }
  } catch (e) {
    log.error(`${e}- Falha ao criar o cliente: ${cliente.nome}`);
    return undefined;
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

export async function apagarClienteService(emailCliente: string) {}

export async function autenticarClienteService(
  email: string,
  password: string
) {
  const clienteExiste = await db.cliente.findFirst({
    where: {
      email: email,
    },
  });

  if (!clienteExiste) {
    return { mensagem: "Dados incorretos" };
  }

  const passwordMatch = compareEncryptedData(clienteExiste.password, password);

  if (!passwordMatch) {
    return { mensagem: "Dados incorretos" };
  }

  const token = gerarToken(clienteExiste.id);

  const refreshToken = await gerarRefreshTokenCliente(clienteExiste.id);

  return { token, refreshToken };
}

export async function refreshTokenClienteService(refreshTokenId: string) {
  const refreshToken = await db.refreshTokenCliente.findFirst({
    where: {
      id: refreshTokenId,
    },
  });

  if (!refreshTokenId) {
    return { mensagem: "Refresh token inválido" };
  }

  const token = gerarToken(refreshToken?.clienteId ?? "");

  return { token };
}
