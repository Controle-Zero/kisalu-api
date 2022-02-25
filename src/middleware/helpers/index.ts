import db from "../../libs/configs/db";

export default async function verifyTokenDB(ID: string, token: string) {
  let loginInfo;
  const cliente = await db.cliente.findUnique({
    where: {
      id: ID,
    },
    include: {
      loginInfo: true,
    },
  });

  if (cliente) {
    loginInfo = cliente.loginInfo.find((f) => f.token === token);
  } else {
    const prestador = await db.prestador.findUnique({
      where: {
        id: ID,
      },
      include: {
        loginInfo: true,
      },
    });
    loginInfo = prestador.loginInfo.find((f) => f.token === token);
  }

  if (loginInfo.token) {
    return true;
  } else {
    return false;
  }
}
