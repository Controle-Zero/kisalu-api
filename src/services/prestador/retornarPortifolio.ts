import db from "../../libs/configs/db";
import { log } from "../../libs/log";

export default async function retornarPortifolioService(id: string) {
  try {
    const posts = await db.prestador.findUnique({
      where: {
        id,
      },
      select: {
        portifolio: true,
      },
    });

    return posts;

  } catch (e) {
    log.error(`Ocorreu um erro ao retornar o portifolio- ${e}`);
    return undefined;
  }
}
