import db from "../../configs/db";
import Prestador from "../../models/prestador.models";
import { log } from "../../libs/log";
import { encryptData } from "../../libs/encryption";


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
          classificacao: prestador.classificacao,
          estado: prestador.estado,
          categorias: {
            createMany: {
              data: prestador.idCategorias.map((ic) => {
                return { idCategoria: ic };
              }),
            },
          },
          //numAvaliacoes: prestadorExiste.numAvaliacoes + 1,
        },
      });

      log.info("Os dados foram atualizados");
      return { mensagem: "Os dados foram atualizados", sucesso: true };
    } else {
      log.info("Prestador não existe");
      return { mensagem: "O prestador não existe", sucesso: false };
    }
  } catch (e) {
    log.error(`Erro ao atualizar os dados do prestador- ${e}`);
    return undefined;
  }
}
