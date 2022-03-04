import db from "../../libs/configs/db";

export async function getAtividadesCompletas(id: string) {
  return await db.prestador.findUnique({
    where: {
      id,
    },
    select: {
      atividades: {
        where: {
          estado: "FINALIZADA",
        },
      },
    },
  });
}
