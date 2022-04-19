import { Server, Socket } from "socket.io";
import { log } from "../libs/log";
import { requestEventHandler } from "./events/functions/request";
import dotenv from "dotenv";
import {
  PrivateMessagePayload,
  RequestPayload,
  ResponsePayload,
} from "./interfaces/payloads";
import { handleSocketsInfo, verifyToken } from "./helpers/functions";
import { responseEventHandler } from "./events/functions/response";
import { Events } from "./events/types/events.types";
import verifyTokenDB from "../middleware/helpers";
import { UserStatus } from "./interfaces/socketUserInfo";
import { disconnectEventHandler } from "./events/functions/disconnect";
import { messageEventHandler } from "./events/functions/private_message";

dotenv.config();

export async function mainChannel(io: Server) {
  io.of(process.env.SOCKETS_NAMESPACE).on("connection", (socket: Socket) => {
    log.info(`Socket ${socket.id} connected`);

    const { token } = socket.handshake.auth;

    if (!token) {
      log.info("Token hasn't been informed...");
      socket.disconnect(true);
      return;
    }

    const userID = verifyToken(token);

    if (userID && verifyTokenDB(token)) {
      handleSocketsInfo(userID, socket, UserStatus.CONNECTED);

      socket.on(Events.REQUEST, (payload: RequestPayload) => {
        requestEventHandler(payload, io);
      });

      socket.on(Events.RESPONSE, (payload: ResponsePayload) => {
        responseEventHandler(payload, socket);
      });

      socket.on(Events.PRIVATE_MESSAGE, (payload: PrivateMessagePayload) => {
        messageEventHandler(payload, socket);
      });

      socket.on(Events.DISCONNECT, () => {
        disconnectEventHandler(io, userID);
      });
    } else {
      socket.disconnect(true);
      return;
    }
  });
}
