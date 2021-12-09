import db from "../database/uservices.database";
import Prestador from "../models/prestador.models";
import { log } from "../log";
import { encryptData } from "../helpers/encryption.helpers";

export async function criarPrestadorService(prestador: Prestador) {
  try {
    const prestadorExiste = await db.prestador.findFirst({
      where: {
        email: prestador.email,
      },
    });

    if (prestadorExiste) {
      log.info(`Email já existe no sistema ${prestador.email}`);
      return { mensagem: "O email já se encontra no sistema" };
    } else {
      await db.prestador.create({
        data: {
          bi: prestador.bi,
          dataNasc: new Date(prestador.dataNasc),
          email: prestador.email,
          morada: prestador.morada,
          telefone: +prestador.telefone,
          password: encryptData(prestador.password),
          nome: prestador.nome,
          iban: prestador.iban,
        },
      });

      log.info(`Prestador ${prestador.nome} criado com sucesso!!`);
      return { mensagem: "prestador criado com sucesso!!" };
    }
  } catch (e) {
    log.error(`${e}- Falha ao criar o prestador: ${prestador.nome}`);
    return undefined;
  }
}

export async function actualizarPrestadorService(
  idPrestador: number,
  prestador: Prestador
) {}

export async function retornarPrestadorService(idPrestador: number) {}

export async function apagarPrestadorService(idPrestador: number) {}
