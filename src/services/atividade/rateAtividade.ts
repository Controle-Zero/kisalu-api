import db from "../../libs/configs/db";
import { log } from "../../libs/log";

export async function rateAtividade(id: string, rate: number) {
  try {
    await db.atividade.update({
      where: {
        id,
      },
      data: {
        avaliacao: rate,
      },
    });

    log.info("Atividade ${id} foi avaliada com sucesso");
    return { message: "Activity has been rated successfully" };
  } catch (e) {
    log.error(`Ocorreu um erro ao avaliar a atividade ${e}`);
    return undefined;
  }
}
