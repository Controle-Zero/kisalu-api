import { Server } from "socket.io";
import SocketUserInfo, { UserStatus } from "../../interfaces/socketUserInfo";
import redisClient from "../../../libs/configs/redis";
import { getUserSocketData } from "../../helpers/functions";

export async function disconnectEventHandler(io: Server, userID: string) {
  const socketInfo: SocketUserInfo = await getUserSocketData(userID);

  const socketInRoom = await io.in(userID).allSockets();
  const isDisconnected: Boolean = socketInRoom.size === 0;

  if (isDisconnected) {
    await redisClient.hset(
      `userID:${userID}`,
      "socketID",
      socketInfo[userID].socketID,
      "status",
      UserStatus.DISCONNECTED
    );
  }
}
