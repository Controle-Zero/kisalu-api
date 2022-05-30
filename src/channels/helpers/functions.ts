import { decode, verify } from "jsonwebtoken";
import { log } from "../../libs/log";
import dotenv from "dotenv";
import redisClient from "../../libs/configs/redis";
import { Socket } from "socket.io";
import SocketUserInfo, { UserStatus } from "../interfaces/socketUserInfo";

dotenv.config();

export function handleSocketsInfo(
  id: string,
  socket: Socket,
  status: UserStatus
) {
  redisClient
    .multi()
    .hset(`userID:${id}`, "socketID", socket.id, "status", status)
    .expire(`userID:${id}`, 86400)
    .exec();
}

export async function getUserSocketData(
  userID: string
): Promise<SocketUserInfo> {
  const [socketID, status] = await redisClient.hmget(
    `userID:${userID}`,
    "socketID",
    "status"
  );

  return { [userID]: { socketID, status } };
}

export function verifyToken(token: string) {
  try {
    verify(token, process.env.SECRET!!);
    const { sub: id } = decode(token);
    log.info("Token Approved By JWT (WebSocket Scope)");
    return String(id);
  } catch (e) {
    log.info("Token Not Approved By JWT (WebSocket Scope)");
    return undefined;
  }
}
