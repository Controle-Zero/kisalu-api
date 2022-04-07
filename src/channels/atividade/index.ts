import { Server, Socket } from "socket.io";
import { log } from "../../libs/log";
import { requestEventHandler } from "./events/functions/request";
import dotenv from "dotenv";
import { RequestPayload, ResponsePayload } from "./interfaces/payload";
import { handleSocketsArray, verifyToken } from "./helpers/index";
import { responseEventHandler } from "./events/functions/response";
import { Events } from "./events/types";
import verifyTokenDB from "../../middleware/helpers";

dotenv.config();

//Real time interaction (notification system)
export async function atividadeChannel(io: Server) {
  let sockets = [];

  io.of(process.env.SOCKETS_ATIVIDADE_NSP).on(
    "connection",
    (socket: Socket) => {
      log.info(`Socket ${socket.id} connected`);

      const { token } = socket.handshake.auth;

      if (!token) {
        log.info("Token hasn't been informed...");
        socket.disconnect();
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
      } else {
        socket.disconnect();
      }
    }
  );
}
