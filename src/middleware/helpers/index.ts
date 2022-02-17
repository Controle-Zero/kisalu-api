import db from "../../libs/configs/db";

export default async function verifyTokenDB(ID: string, token: string) {
  let loginInfo;
  const cliente = await db.cliente.findUnique({
    where: {
      id: ID,
    },
  });

  if (cliente) {
    loginInfo = JSON.parse(cliente.loginInfo);
  } else {
    const prestador = await db.prestador.findUnique({
      where: {
        id: ID,
      },
    });
    loginInfo = JSON.parse(prestador.loginInfo);
  }

  if (loginInfo.token === token) {
    return true;
  } else {
    return false;
  }
}
