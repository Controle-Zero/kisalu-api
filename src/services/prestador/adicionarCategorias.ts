import db from "../../libs/configs/db";
import { log } from "../../libs/log";

/*export async function refreshTokenPrestadorService(refreshTokenId: string) {
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
}*/

export async function adicionarCategoriasService(
  idPrestador: string,
  idCategorias: string[]
) {
  try {
    await db.prestador.update({
      where: {
        id: idPrestador,
      },
      data: {
        categorias: {
          createMany: {
            data: idCategorias.map((ic) => {
              return { idCategoria: ic };
            }),
          },
        },
      },
    });
    log.info(
      `As categorias foram adicionadas com sucesso ao perfil do provedor ${idPrestador}`
    );
    return {
      mensagem: "As categorias foram adicionadas com sucesso",
      sucesso: true,
    };
  } catch (e) {
    log.error(
      `Erro ao adicionar categorias no perfil do provedor ${idPrestador}- ${e}`
    );
    return undefined;
  }
}
