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

    const returnPayload = {
      cliente: retornarClienteService(payload.atividade.clienteId),
      categoria: payload.atividade.categoriaId,
      atividadeDB,
    };

    socket.emit(
      `${Events.REQUEST}:${payload.atividade.prestadorId}`,
      returnPayload
    );
  } else {
    log.info("Only customers can trigger the request event");
  }
}
