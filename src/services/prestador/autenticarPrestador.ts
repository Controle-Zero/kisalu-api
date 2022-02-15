import db from "../../configs/db";
import { compareEncryptedData } from "../../libs/encryption";
import { gerarToken } from "../../libs/generateToken";


export async function autenticarPrestadorService(
  email: string,
  password: string
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

  await db.prestador.update({
    where: {
      id: prestadorExiste.id,
    },
    data: {
      token: generatedToken,
    },
  });

  //const refreshToken = await gerarRefreshTokenPrestador(prestadorExiste.id);
  return { generatedToken };
}
