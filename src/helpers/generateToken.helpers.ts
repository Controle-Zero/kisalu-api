import { sign } from "jsonwebtoken";
import dotenv from "dotenv";

export function gerarToken(idCliente: string) {
  const token = sign({}, process.env.SECRET!!, {
    subject: idCliente,
    expiresIn: "1d",
  });

  return token;
}
