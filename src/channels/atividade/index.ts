import { Server, Socket } from "socket.io";
import { log } from "../../libs/log";
import { requestEventHandler } from "./events/functions/request";
import dotenv from "dotenv";
import { RequestPayload, ResponsePayload } from "./interfaces/payload";
import { handleSocketsArray } from "./helpers/index";
import { responseEventHandler } from "./events/functions/response";
import { Events } from "./events/types";

dotenv.config();

//Real time interaction (notification system)
export async function atividadeChannel(io: Server) {
  let sockets = [];

  io.of(process.env.SOCKETS_ATIVIDADE_NSP).on(
    "connection",
    (socket: Socket) => {
      log.info(`Socket ${socket.id} connected`);

      socket.on(Events.REQUEST, (payload: RequestPayload) => {
        handleSocketsArray(payload.TriggeredBy.id, { socket, sockets });
        requestEventHandler({ payload, io });
      });

      socket.on(Events.RESPONSE, (payload: ResponsePayload) => {
        handleSocketsArray(payload.TriggeredBy.id, { socket, sockets });
        responseEventHandler({ payload, socket, sockets });
      });
    }
  );
}
