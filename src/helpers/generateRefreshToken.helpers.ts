import db from "../database/uservices.database";
import dayjs from "dayjs";

export async function gerarRefreshTokenCliente(idCliente: string) {
  await db.refreshTokenCliente.deleteMany({
    where: {
      clienteId: idCliente,
    },
  });

  const generateRefreshToken = await db.refreshTokenCliente.create({
    data: {
      clienteId: idCliente,
      expiraEm: dayjs().add(30, "minute").unix(),
    },
  });

  return generateRefreshToken;
}

export async function gerarRefreshTokenPrestador(idPrestador: string) {}