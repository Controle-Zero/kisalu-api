import { log } from "../../libs/log";
import db from "../../libs/configs/db";
import { compareEncryptedData } from "../../libs/utils/encryption";
import { gerarToken } from "../../libs/utils/generateToken";
import Token from "../../models/token.models";
import tokenHandler from "../../libs/utils/tokenHandler";

export async function autenticarClienteService(
  email: string,
  password: string,
  device: Pick<Token, "device">
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

  tokenHandler(generatedToken, device, clienteExiste.id);

  //const refreshToken = await gerarRefreshTokenCliente(clienteExiste.id);
  log.info(`Login feito com sucesso!!`);
  return { generatedToken };
}
