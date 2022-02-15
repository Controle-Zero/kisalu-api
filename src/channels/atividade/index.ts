import { Server, Socket } from "socket.io";
import { log } from "../../libs/log";
import { requestEventHandler } from "./events/request";
import { responseEventHandler } from "./events/response";
import { handleSocketsArray } from "./helpers";
import dotenv from "dotenv";

dotenv.config();

//Real time interaction (notification system)
export async function atividadeChannel(io: Server) {
  let sockets = [];

  io.of(process.env.SOCKETS_ATIVIDADE_NSP).on(
    "connection",
    (socket: Socket) => {
      log.info(`Socket ${socket.id} connected`);

      const { idCliente, idProvedor } = socket.handshake.auth;

      if (idCliente && idProvedor) {
        handleSocketsArray(idCliente, { socket, sockets });
        requestEventHandler({ socket, io, idProvedor });
      } else {
        responseEventHandler({ socket, sockets });
      }
    }
  );
}
