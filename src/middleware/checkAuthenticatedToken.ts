import Cliente from "../models/cliente.models";
import Prestador from "../models/prestador.models";
import { NextFunction, Response } from "express";
import getClienteOrProvedor from "./functions/getClienteOrProvedor";
import CustomRequest from "./models/customRequest.models";
import { log } from "../libs/log";

export default async function checkAuthenticatedToken(
  req: CustomRequest,
  res: Response,
  next: NextFunction
) {
  const entity: Cliente | Prestador = await getClienteOrProvedor(req.id);

  if (entity.token === req.headers.authorization.split(" ")[1]) {
    return next();
  } else {
    log.error("O token informado está na blacklist");
    return res.status(500).json({ mensagem: "Token inválido" });
  }
}
