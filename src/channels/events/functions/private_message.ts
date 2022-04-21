import { Socket } from "socket.io";
import { log } from "../../../libs/log";
import guardarMensagem from "../../../services/chat/guardarMensagem";
import { PrivateMessagePayload, Roles } from "../../interfaces/payloads";
import { Events } from "../types/events.types";

export async function messageEventHandler(
  payload: PrivateMessagePayload,
  socket: Socket
) {
  log.info("Private Message Event");

  let to: string;

  payload.messageInfo.from = payload.TriggeredBy.role;

  guardarMensagem(payload.messageInfo);

  if (payload.TriggeredBy.role === Roles.CLIENTE) {
    to = payload.messageInfo.prestadorID;
  } else if (payload.TriggeredBy.role === Roles.PRESTADOR) {
    to = payload.messageInfo.clienteID;
  }

  if (to) {
    socket.to(to).emit(Events.PRIVATE_MESSAGE, payload);
  }
}
