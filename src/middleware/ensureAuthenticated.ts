import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import dotenv from "dotenv";
import { log } from "../log";

dotenv.config();

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({
      mensagem: "Token não informado",
    });
  }

  try {
    log.info("Verificando o token...");
    verify(authToken.split(" ")[1], process.env.SECRET!!);
    log.info("Token aprovado");
    return next();
  } catch (e) {
    log.error("Token reprovado...");
    return res.status(401).json({
      mensagem: "Token inválido",
    });
  }
}
