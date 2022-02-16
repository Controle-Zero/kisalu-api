import Token from "../../models/token.models";
import db from "../configs/db";

export default async function tokenHandler(
  token: string,
  device: Pick<Token, "device">,
  idCliente?: string,
  idPrestador?: string
) {
  if (idCliente) {
    await db.token.create({
      data: {
        id: token,
        device,
        clienteId: idCliente,
      },
    });
  } else {
    await db.token.create({
      data: {
        id: token,
        device,
        prestadorId: idPrestador,
      },
    });
  }
}
