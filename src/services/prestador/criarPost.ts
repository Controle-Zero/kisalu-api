import db from "../../libs/configs/db";
import { log } from "../../libs/log";
import { Post } from "../../models/prestador.models";

export default async function criarPostService(id: string, post) {
  try {
    await db.prestador.update({
      where: {
        id,
      },
      data: {
        portifolio: {
          create: {
            descricao: post.descricao,
            categoriaId: post.idCategoria,
            mediaUrl: post.mediaUrl,
          },
        },
      },
    });

    log.info(`Post criado com sucesso no perfil do provedor ${id}`);
    return {
      message: "The post has been inserted into the portifolio",
      succes: true,
    };
  } catch (e) {
    log.error(`Ocorreu um erro ao criar o post- ${e}`);
    return undefined;
  }
}
