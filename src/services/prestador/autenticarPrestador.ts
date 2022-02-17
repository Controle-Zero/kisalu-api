import db from "../../libs/configs/db";
import { compareEncryptedData } from "../../libs/utils/encryption";
import { gerarToken } from "../../libs/utils/generateToken";
import tokenHandler from "../../libs/utils/tokenHandler";
import Token from "../../models/token.models";

export async function autenticarPrestadorService(
  email: string,
  password: string,
  device: Pick<Token, "device">
) {
  const prestadorExiste = await db.prestador.findFirst({
    where: {
      email: email,
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

  const generatedToken = gerarToken(prestadorExiste.id);

  tokenHandler(generatedToken, device, prestadorExiste.id);

  //const refreshToken = await gerarRefreshTokenPrestador(prestadorExiste.id);
  return { generatedToken };
}
