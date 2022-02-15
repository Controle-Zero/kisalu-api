import db from "../../database/uservices.database";
import Prestador from "../../models/prestador.models";
import { log } from "../../libs/log";
import { encryptData } from "../../libs/encryption";

export async function criarPrestadorService(prestador: Prestador) {
  try {
    log.info(`Prestador recebido: ${JSON.stringify(prestador)}`);
    const prestadorExiste = await db.prestador.findFirst({
      where: {
        email: prestador.email,
      },
    });

    if (prestadorExiste) {
      log.info(`Email já existe no sistema ${prestador.email}`);
      return { mensagem: "O email já se encontra no sistema", sucesso: false };
    } else {
      await db.prestador.create({
        data: {
          bi: prestador.bi,
          dataNasc: new Date(prestador.dataNasc),
          email: prestador.email,
          morada: prestador.morada,
          telefone: prestador.telefone,
          password: encryptData(prestador.password),
          nome: prestador.nome,
          iban: prestador.iban,
          descricao: prestador.descricao,
          categorias: {
            createMany: {
              data: prestador.idCategorias.map((e) => {
                return { idCategoria: e };
              }),
            },
          },
        },
      });

      log.info(`Prestador ${prestador.nome} criado com sucesso!!`);
      return { mensagem: "prestador criado com sucesso!!", sucesso: true };
    }
  } catch (e) {
    log.error(`${e}- Falha ao criar o prestador: ${prestador.nome}`);
    return undefined;
  }
}
