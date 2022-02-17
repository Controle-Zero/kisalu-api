import Token from "../../models/token.models";
import db from "../configs/db";

export default async function tokenHandler(
  token: string,
  device: Pick<Token, "device">,
  clienteId?: string,
  prestadorId?: string
) {
  if (clienteId) {
    await db.token.upsert({
      where: {
        id: token,
      },
      update: {
        id: token,
      },
      create: {
        id: token,
        device,
        clienteId,
      },
    });
  } else {
    await db.token.upsert({
      where: {
        id: token,
      },
      update: {
        id: token,
      },
      create: {
        id: token,
        device,
        prestadorId,
      },
    });
  }
}
