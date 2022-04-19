import { Socket } from "socket.io";
import { log } from "../../../libs/log";
import guardarMensagem from "../../../services/chat/guardarMensagem";
import { getUserSocketData } from "../../helpers/functions";
import { PrivateMessagePayload, Roles } from "../../interfaces/payloads";
import SocketUserInfo from "../../interfaces/socketUserInfo";
import { Events } from "../types/events.types";

export async function messageEventHandler(
  payload: PrivateMessagePayload,
  socket: Socket
) {
  log.info("Private Message Event");

  let to: string;
  let user: SocketUserInfo;

  payload.messageInfo.from = payload.TriggeredBy.role;

  guardarMensagem(payload.messageInfo);

  if (payload.TriggeredBy.role === Roles.CLIENTE) {
    user = await getUserSocketData(payload.messageInfo.prestadorID);
    to = user[payload.messageInfo.prestadorID].socketID;
  } else if (payload.TriggeredBy.role === Roles.PRESTADOR) {
    user = await getUserSocketData(payload.messageInfo.clienteID);
    to = user[payload.messageInfo.clienteID].socketID;
  }

  if (to) {
    socket.to(to).emit(Events.PRIVATE_MESSAGE, payload);
  }
}
