import db from "../configs/db";
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

export async function gerarRefreshTokenPrestador(idPrestador: string) {
  await db.refreshTokenPrestador.deleteMany({
    where: {
      prestadorId: idPrestador,
    },
  });

  const generateRefreshToken = await db.refreshTokenPrestador.create({
    data: {
      prestadorId: idPrestador,
      expiraEm: dayjs().add(30, "minute").unix(),
    },
  });

  return generateRefreshToken;
}
