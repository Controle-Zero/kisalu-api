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

  const generatedToken = gerarToken(clienteExiste.id);

  const loginInfo: LoginInfo = {
    uniqueID: device.uniqueID,
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
          upsert: {
            where: {
              id: loginInfo.uniqueID,
            },
            update: {
              token: loginInfo.token,
              device: loginInfo.device,
            },
            create: {
              id: loginInfo.uniqueID,
              token: loginInfo.token,
              device: loginInfo.device,
            },
          },
        },
      },
    });
  } catch (e) {
    log.error(`Erro ao criar a informação do login- ${e}`);
    return undefined;
  }

  //const refreshToken = await gerarRefreshTokenCliente(clienteExiste.id);
  log.info(`Login feito com sucesso!!`);
  return { generatedToken };
}
