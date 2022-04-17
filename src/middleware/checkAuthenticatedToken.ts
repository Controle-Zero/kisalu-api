import { NextFunction, Response } from "express";
import verifyTokenDB from "./helpers";
import CustomRequest from "./types/customRequest";
import { log } from "../libs/log";

export default async function checkAuthenticatedToken(
  req: CustomRequest,
  res: Response,
  next: NextFunction
) {
  const tokenExists: boolean = await verifyTokenDB(
    req.headers.authorization.split(" ")[1]
  );

  if (tokenExists) {
    return next();
  } else {
    log.error("O token informado está na blacklist (Kisalu Scope)");
    return res.status(400).json({ message: "Invalid Token" });
  }
}
