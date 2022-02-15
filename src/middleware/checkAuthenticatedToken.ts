import Cliente from "../models/cliente.models";
import Prestador from "../models/prestador.models";
import { NextFunction, Response } from "express";
import getClienteOrProvedor from "./helpers";
import CustomRequest from "./types/customRequest";
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
    return res.status(400).json({ mensagem: "Token inválido" });
  }
}
