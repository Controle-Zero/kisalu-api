import { NextFunction, Response } from "express";
import { decode, verify } from "jsonwebtoken";
import CustomRequest from "./types/customRequest";
import dotenv from "dotenv";
import { log } from "../libs/log";

dotenv.config();

export function ensureAuthenticated(
  req: CustomRequest,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({
      message: "The token wasn't informed",
    });
  }

  try {
    log.info("Verificando o token...");
    verify(authToken.split(" ")[1], process.env.SECRET!!);
    log.info("Token aprovado!");

    const { sub: id } = decode(authToken.split(" ")[1]);
    req.id = String(id);
    return next();
  } catch (e) {
    log.error("Token reprovado!");
    return res.status(401).json({
      message: "Invalid Token",
    });
  }
}
