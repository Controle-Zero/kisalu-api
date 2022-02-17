import dayjs from "dayjs";
import db from "../../libs/configs/db";
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

  const loginInfo: LoginInfo = {
    token: generatedToken,
    device,
    createdAt: dayjs().format(),
  };

  await db.prestador.update({
    where: {
      id: prestadorExiste.id,
    },
    data: {
      loginInfo: JSON.stringify(loginInfo),
    },
  });

  //const refreshToken = await gerarRefreshTokenPrestador(prestadorExiste.id);
  return { generatedToken };
}
