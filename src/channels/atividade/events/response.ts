import { log } from "../../../libs/log";
import { updateAtividadeService } from "../../../services/atividade/updateAtividade";
import AtividadeResponsePayload from "../types/atividadeResponsePayload";
import { ResponseEventContext } from "../types/responseEventContext";

export async function responseEventHandler({
  socket,
  sockets,
}: ResponseEventContext) {
  socket.on(`response`, (atividade: AtividadeResponsePayload) => {
    log.info(`Response event`);

    updateAtividadeService(atividade);

    const to =
      sockets.length > 0
        ? sockets.find((f) => f[atividade.Cliente.id])[atividade.Categoria.id]
        : "";

    if (to) {
      log.info(to);
      socket.to(to).emit(`response`, atividade);
    }
  });
}
