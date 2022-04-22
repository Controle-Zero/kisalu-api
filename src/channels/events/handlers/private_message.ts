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

  payload.messageInfo.from = payload.TriggeredBy.role;

  guardarMensagem(payload.messageInfo);

  socket
    .to(payload.messageInfo.prestadorID)
    .to(payload.messageInfo.clienteID)
    .emit(Events.PRIVATE_MESSAGE, payload);
}
