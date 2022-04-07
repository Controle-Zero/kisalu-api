import { decode, verify } from "jsonwebtoken";
import { ResponseEventContext } from "../interfaces/responseEventContext";
import { log } from "../../../libs/log";
import dotenv from "dotenv";

dotenv.config();

export function handleSocketsArray(
  id: string,
  { socket, sockets }: Omit<ResponseEventContext, "payload">
) {
  const idExiste = sockets.length > 0 ? sockets.find((f) => f[id]) : undefined;
  if (idExiste) {
    const index = sockets.findIndex((fi) => fi[id]);
    sockets[index][id] = socket.id;
  } else {
    sockets.push({ [id]: socket.id });
  }
}

export function verifyToken(token: string) {
  try {
    verify(token, process.env.SECRET!!);
    const { sub: id } = decode(token);
    log.info("Token Approved (WebSocket Scope)");
    return String(id);
  } catch (e) {
    log.info("Token Not Approved (WebSocket Scope)");
    return undefined;
  }
}
