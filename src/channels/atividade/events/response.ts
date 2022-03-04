import { log } from "../../../libs/log";
import { updateAtividadeService } from "../../../services/atividade/updateAtividade";
import { handleSocketsArray } from "../helpers";
import AtividadeResponsePayload from "../interfaces/atividadeResponsePayload";
import { ResponseEventContext } from "../interfaces/responseEventContext";

export async function responseEventHandler(
  { socket, sockets }: ResponseEventContext,
  idCliente?: string
) {
  socket.on(`response`, (atividade: AtividadeResponsePayload) => {
    log.info(`Response event`);
    let to: string;

    updateAtividadeService(atividade);

    if (idCliente) {
      to =
        sockets.length > 0
          ? sockets.find((f) => f[atividade.Prestador.id])[
              atividade.Prestador.id
            ]
          : "";
    } else {
      //handleSocketsArray(atividade.Prestador.id, { socket, sockets });
      log.info(atividade.Cliente.id);
      to =
        sockets.length > 0
          ? sockets.find((f) => f[atividade.Cliente.id])[atividade.Cliente.id]
          : "";
    }

    if (to) {
      log.info(to);
      socket.to(to).emit(`response`, atividade);
    }
  });
}
