import { log } from "../../../libs/log";
import Atividade from "../../../models/atividade.models";
import { criarAtividadeService } from "../../../services/atividade/criarAtividade";
import { retornarClienteService } from "../../../services/cliente/retornarCliente";
import RequestEventContext from "../interfaces/requestEventContext";

export async function requestEventHandler({
  socket,
  io,
  idProvedor,
}: RequestEventContext) {
  socket.on(`request:${idProvedor}`, (atividade: Atividade) => {
    log.info("Request event");
    
    const atividadeDB = criarAtividadeService(atividade);

    const payload = {
      cliente: retornarClienteService(atividade.clienteId),
      categoria: atividade.categoriaId,
      atividadeDB,
    };

    io.emit(`request:${idProvedor}`, payload);
  });
}
