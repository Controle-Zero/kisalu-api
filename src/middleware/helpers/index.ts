import db from "../../libs/configs/db";

export default async function verifyTokenDB(ID: string, token: string) {
  const tokenExists = await db.token.findUnique({
    where: {
      id: token,
    },
  });

  if (
    tokenExists &&
    (tokenExists.clienteId || tokenExists.prestadorId) === ID
  ) {
    return true;
  } else {
    return false;
  }
}
