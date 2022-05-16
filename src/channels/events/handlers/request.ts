import { Socket } from "socket.io";
import { log } from "../../../libs/log";
import { criarAtividadeService } from "../../../services/atividade/criarAtividade";
import { retornarClienteService } from "../../../services/cliente/retornarCliente";
import { RequestPayload, Roles } from "../../interfaces/payloads";
import { Events } from "../types/events.types";

export async function requestEventHandler(
  payload: RequestPayload,
  socket: Socket
) {
  log.info("Request event");

  if (payload.TriggeredBy.role === Roles.CLIENTE) {
    const atividadeDB = criarAtividadeService(payload.atividade);

    if (atividadeDB) {
      const returnPayload = {
        cliente: retornarClienteService(payload.TriggeredBy.id),
        categoria: payload.atividade.categoriaId,
        atividadeDB,
      };

      socket
        .to(payload.atividade.prestadorId)
        .emit(Events.REQUEST, returnPayload);
    }
  } else {
    log.info("Only customers can trigger the request event");
  }
}
