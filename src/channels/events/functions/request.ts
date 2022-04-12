import { log } from "../../../libs/log";
import { criarAtividadeService } from "../../../services/atividade/criarAtividade";
import { retornarClienteService } from "../../../services/cliente/retornarCliente";
import { Roles } from "../../interfaces/payload";
import RequestEventContext from "../../interfaces/requestEventContext";
import { Events } from "../types/events.types";

export async function requestEventHandler({
  payload,
  io,
}: RequestEventContext) {
  log.info("Request event");

  if (payload.TriggeredBy.role === Roles.CLIENTE) {
    const atividadeDB = criarAtividadeService(payload.atividade);

    const returnPayload = {
      cliente: retornarClienteService(payload.atividade.clienteId),
      categoria: payload.atividade.categoriaId,
      atividadeDB,
    };

    io.emit(
      `${Events.REQUEST}:${payload.atividade.prestadorId}`,
      returnPayload
    );
  } else {
    log.info("Only customers can trigger the request event");
  }
}
