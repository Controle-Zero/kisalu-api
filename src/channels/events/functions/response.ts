import { log } from "../../../libs/log";
import { updateAtividadeService } from "../../../services/atividade/updateAtividade";
import { ResponsePayload, Roles } from "../../interfaces/payloads";
import { Events } from "../types/events.types";
import { Socket } from "socket.io";

export async function responseEventHandler(
  payload: ResponsePayload,
  socket: Socket
) {
  log.info(`Response event`);
  let to: string;

  updateAtividadeService(payload.atividade);

  if (payload.TriggeredBy.role === Roles.CLIENTE) {
    to = payload.atividade.Prestador.id;
  } else if (payload.TriggeredBy.role === Roles.PRESTADOR) {
    to = payload.atividade.Cliente.id;
  }
  
  socket.to(to).emit(Events.RESPONSE, payload.atividade);
}
