import db from "../../libs/configs/db";
import { log } from "../../libs/log";
import { compareEncryptedData } from "../../libs/utils/encryption";
import { gerarToken } from "../../libs/utils/generateToken";
import { LoginInfo } from "../../models/cliente.models";

export async function autenticarPrestadorService(
  email: string,
  password: string,
  device
) {
  const prestadorExiste = await db.prestador.findFirst({
    where: {
      email: email,
    },
    include: {
      loginInfo: {
        where: {
          deviceId: device.uniqueID,
        },
      },
    },
  });

  if (!prestadorExiste) {
    return undefined;
  }

  const passwordMatch = compareEncryptedData(
    prestadorExiste.password,
    password
  );

  if (!passwordMatch) {
    return undefined;
  }

  const currentToken = prestadorExiste.loginInfo.find(
    (f) => f.deviceId === device.uniqueID
  );

  if (currentToken) {
    await db.loginInfo.delete({
      where: {
        token: currentToken.token,
      },
    });
  }

  const generatedToken = gerarToken(prestadorExiste.id);

  const loginInfo: LoginInfo = {
    token: generatedToken,
    device,
  };

  try {
    await db.prestador.update({
      where: {
        id: prestadorExiste.id,
      },
      data: {
        loginInfo: {
          create: {
            device: loginInfo.device,
            deviceId: loginInfo.device.uniqueID,
            token: loginInfo.token,
          },
        },
      },
    });
  } catch (e) {
    log.error(`Erro ao criar a informação do login- ${e}`);
    return undefined;
  }

  //const refreshToken = await gerarRefreshTokenPrestador(prestadorExiste.id);
  return { generatedToken };
}
