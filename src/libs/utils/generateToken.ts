import { sign } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export function gerarToken(id: string) {
  const token = sign({}, process.env.SECRET!!, {
    subject: id,
  });

  return token;
}
