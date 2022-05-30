import db from "../../libs/configs/db";
import Prestador from "../../models/prestador.models";
import { log } from "../../libs/log";
import { encryptData } from "../../libs/utils/encryption";

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
      return { message: "The entered email is being used", success: false };
    } else {
      await db.prestador.create({
        data: {
          bi: prestador.bi,
          dataNasc: new Date(prestador.dataNasc),
          email: prestador.email,
          morada: {
            create: {
              bairro: prestador.morada.bairro,
              complemento: prestador.morada.complemento,
              distrito: prestador.morada.distrito,
              municipio: prestador.morada.municipio,
              provincia: prestador.morada.provincia,
            },
          },
          telefone: prestador.telefone,
          password: encryptData(prestador.password),
          imageUrl: prestador.imageUrl,
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
      return { message: "Provider has been created!", success: true };
    }
  } catch (e) {
    log.error(`${e}- Falha ao criar o prestador: ${prestador.nome}`);
    return undefined;
  }
}
