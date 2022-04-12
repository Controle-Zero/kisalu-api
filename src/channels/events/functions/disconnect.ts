import { Server, Socket } from "socket.io";
import SocketUserInfo from "../../interfaces/socketUserInfo";

export async function disconnectEventHandler(
  io: Server,
  userID: string,
  sockets: SocketUserInfo[]
) {
  const socketInfo: SocketUserInfo = sockets.find((f) => f[userID]);
  const socketInRoom = await io.in(socketInfo[userID].socketID).allSockets();
  const isDisconnected: Boolean = socketInRoom.size === 0;

  if (isDisconnected) {
    const index = sockets.findIndex((f) => f[userID]);
    sockets[index][userID].connected = false;
  }
}
