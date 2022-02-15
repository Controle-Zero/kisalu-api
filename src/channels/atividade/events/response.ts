import { log } from "../../../libs/log";
import { updateAtividadeService } from "../../../services/atividade/updateAtividade";
import AtividadePayload from "../types/atividadePayload";
import { ResponseEventContext } from "../types/responseEventContext";

export async function responseEventHandler({ socket, sockets }: ResponseEventContext) {
  socket.on(`response`, (atividade: AtividadePayload) => {
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
