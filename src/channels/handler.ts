import { Server, Socket } from "socket.io";
import { log } from "../libs/log";
import { requestEventHandler } from "./events/functions/request";
import dotenv from "dotenv";
import { RequestPayload, ResponsePayload } from "./interfaces/payload";
import { handleSocketsArray, verifyToken } from "./helpers/functions";
import { responseEventHandler } from "./events/functions/response";
import { Events } from "./events/types/events.types";
import verifyTokenDB from "../middleware/helpers";
import SocketUserInfo from "./interfaces/socketUserInfo";
import { disconnectEventHandler } from "./events/functions/disconnect";

dotenv.config();

//Real time interaction (notification system)
export async function mainChannel(io: Server) {
  let sockets: SocketUserInfo[] = [];

  io.of(process.env.SOCKETS_NAMESPACE).on("connection", (socket: Socket) => {
    log.info(`Socket ${socket.id} connected`);

    const { token } = socket.handshake.auth;

    if (!token) {
      log.info("Token hasn't been informed...");
      socket.disconnect(true);
    }

    const userID = verifyToken(token);

    if (userID && verifyTokenDB(token)) {
      handleSocketsArray(userID, { socket, sockets });

      socket.on(Events.REQUEST, (payload: RequestPayload) => {
        requestEventHandler({ payload, io });
      });

      socket.on(Events.RESPONSE, (payload: ResponsePayload) => {
        responseEventHandler({ payload, socket, sockets });
      });

      socket.on(Events.DISCONNECT, async () => {
        disconnectEventHandler(io, userID, sockets);
      });
    } else {
      socket.disconnect(true);
    }
  });
}
