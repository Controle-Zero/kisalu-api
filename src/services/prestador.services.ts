import db from "../database/uservices.database";
import Prestador from "../models/prestador.models";
import { log } from "../log";
import {
  encryptData,
  compareEncryptedData,
} from "../helpers/encryption.helpers";
import { gerarToken } from "../helpers/generateToken.helpers";
import { gerarRefreshTokenPrestador } from "../helpers/generateRefreshToken.helpers";
import dayjs from "dayjs";

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

export async function actualizarPrestadorService(prestador: Prestador) {
  try {
    const prestadorExiste = await db.prestador.findMany({
      where: {
        email: prestador.email,
      },
    });

    if (prestadorExiste) {
      await db.prestador.update({
        where: {
          email: prestador.email,
        },
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

      log.info("Os dados foram atualizados");
      return { mensagem: "Os dados foram atualizados" };
    } else {
      log.info("Prestador não existe");
      return { mensagem: "O prestador não existe" };
    }
  } catch (e) {
    log.error(`Erro ao atualizar os dados do prestador- ${e}`);
    return undefined;
  }
}

export async function retornarPrestadorService(emailPrestador: string) {
  try {
    const prestador = await db.prestador.findUnique({
      where: {
        email: emailPrestador,
      },
    });
    log.info(`prestador retorando: ${prestador?.email}`);
    return prestador;
  } catch (e) {
    log.error(`${e}- Falha ao retornar o prestador`);
    return undefined;
  }
}

export async function apagarPrestadorService(idPrestador: number) {}

export async function autenticarPrestadorService(
  email: string,
  password: string
) {
  const prestadorExiste = await db.prestador.findFirst({
    where: {
      email: email,
    },
  });

  if (!prestadorExiste) {
    return undefined;
  }

  const passwordMatch = compareEncryptedData(
    prestadorExiste.password,
    password
  );

  if (!passwordMatch) {
    return undefined;
  }

  const token = gerarToken(prestadorExiste.id);

  const refreshToken = await gerarRefreshTokenPrestador(prestadorExiste.id);

  return { token, refreshToken };
}

export async function refreshTokenPrestadorService(refreshTokenId: string) {
  const refreshToken = await db.refreshTokenPrestador.findFirst({
    where: {
      id: refreshTokenId,
    },
  });

  if (!refreshTokenId) {
    return undefined;
  }

  const refreshTokenExpirado = dayjs().isAfter(
    dayjs.unix(refreshToken?.expiraEm ?? 0)
  );

  const token = gerarToken(refreshToken?.prestadorId ?? "");

  if (refreshTokenExpirado) {
    await db.refreshTokenPrestador.deleteMany({
      where: {
        prestadorId: refreshToken?.prestadorId,
      },
    });
    const renewedToken = await gerarRefreshTokenPrestador(
      refreshToken?.prestadorId ?? ""
    );
    return { token, renewedToken };
  }

  return { token };
}
