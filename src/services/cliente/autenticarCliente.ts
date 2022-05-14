import { log } from "../../libs/log";
import db from "../../libs/configs/db";
import { compareEncryptedData } from "../../libs/utils/encryption";
import { gerarToken } from "../../libs/utils/generateToken";
import { LoginInfo } from "../../models/cliente.models";

export async function autenticarClienteService(
  email: string,
  password: string,
  device
) {
  const clienteExiste = await db.cliente.findFirst({
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

  if (!clienteExiste) {
    log.info(`O cliente não existe: ${email}`);
    return undefined;
  }

  const passwordMatch = compareEncryptedData(clienteExiste.password, password);

  if (!passwordMatch) {
    log.info(`A palavra passe está incorrecta: ${password}`);
    return undefined;
  }

  const currentToken = clienteExiste.loginInfo.find(
    (f) => f.deviceId === device.uniqueID
  );

  if (currentToken) {
    await db.loginInfo.delete({
      where: {
        token: currentToken.token,
      },
    });
  }

  const generatedToken = gerarToken(clienteExiste.id);

  const loginInfo: LoginInfo = {
    token: generatedToken,
    device,
  };

  try {
    await db.cliente.update({
      where: {
        id: clienteExiste.id,
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

  return { generatedToken };
}
