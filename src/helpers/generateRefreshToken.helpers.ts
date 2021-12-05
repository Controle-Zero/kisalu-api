import db from "../database/uservices.database";
import dayjs from "dayjs";

export async function gerarRefreshTokenCliente(idCliente: string) {
  const generateRefreshToken = await db.refreshTokenCliente.create({
    data: {
      clienteId: idCliente,
      expiraEm: dayjs().add(1, "day").unix(),
    },
  });

  return generateRefreshToken;
}

export async function gerarRefreshTokenPrestador(idPrestador: string) {}
