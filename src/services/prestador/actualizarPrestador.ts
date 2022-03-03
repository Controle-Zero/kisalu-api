import db from "../../libs/configs/db";
import Prestador from "../../models/prestador.models";
import { log } from "../../libs/log";
import { encryptData } from "../../libs/utils/encryption";
import { getRate } from "../../libs/utils/ratingSystem";

export async function actualizarPrestadorService(prestador: Prestador) {
  try {
    const prestadorExiste = await db.prestador.findUnique({
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
          telefone: prestador.telefone,
          password: encryptData(prestador.password),
          nome: prestador.nome,
          iban: prestador.iban,
          descricao: prestador.descricao,
          estado: prestador.estado,
          categorias: {
            createMany: {
              data: prestador.idCategorias.map((ic) => {
                return { idCategoria: ic };
              }),
            },
          },
        },
      });

      log.info("Os dados foram atualizados");
      return { message: "Provider data have been updated", success: true };
    } else {
      log.info("Prestador não existe");
      return { message: "Customer doesn't exist", success: false };
    }
  } catch (e) {
    log.error(`Erro ao atualizar os dados do prestador- ${e}`);
    return undefined;
  }
}

export async function prestadorRateUpdate(id: string, atividades) {
  try {
    const prestadorExiste = await db.prestador.findUnique({
      where: {
        id,
      },
    });

    if (prestadorExiste) {
      await db.prestador.update({
        where: {
          id: prestadorExiste.id,
        },
        data: {
          rate: getRate(atividades),
        },
      });
    } else {
      log.info("Prestador não existe");
    }
  } catch (e) {
    log.error(`Erro ao atualizar os dados do prestador- ${e}`);
    return undefined;
  }
}
