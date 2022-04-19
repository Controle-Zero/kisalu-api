import { log } from "../../../libs/log";
import { updateAtividadeService } from "../../../services/atividade/updateAtividade";
import { ResponsePayload, Roles } from "../../interfaces/payloads";
import { Events } from "../types/events.types";
import { getUserSocketData } from "../../helpers/functions";
import { Socket } from "socket.io";
import SocketUserInfo from "../../interfaces/socketUserInfo";

export async function responseEventHandler(
  payload: ResponsePayload,
  socket: Socket
) {
  log.info(`Response event`);
  let to: string;
  let user: SocketUserInfo;

  updateAtividadeService(payload.atividade);

  if (payload.TriggeredBy.role === Roles.CLIENTE) {
    user = await getUserSocketData(payload.atividade.Prestador.id);
    to = user[payload.atividade.Prestador.id].socketID;
  } else if (payload.TriggeredBy.role === Roles.PRESTADOR) {
    user = await getUserSocketData(payload.atividade.Cliente.id);
    to = user[payload.atividade.Cliente.id].socketID;
  }

  if (to) {
    log.info(to);
    socket.to(to).emit(Events.RESPONSE, payload.atividade);
  }
}
