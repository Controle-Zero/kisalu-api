import { log } from "../../libs/log";
import db from "../../configs/db";
import { compareEncryptedData } from "../../libs/encryption";
import { gerarToken } from "../../libs/generateToken";

export async function autenticarClienteService(
  email: string,
  password: string
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

  await db.cliente.update({
    where: {
      id: clienteExiste.id,
    },
    data: {
      token: generatedToken,
    },
  });

  //const refreshToken = await gerarRefreshTokenCliente(clienteExiste.id);
  log.info(`Login feito com sucesso!!`);
  return { generatedToken };
}
